-- 1. create enums for status control
create type user_role as enum ('passenger', 'driver', 'admin');
create type request_status as enum ('pending', 'accepted', 'cancelled', 'completed');
create type payment_status_type as enum ('pending', 'completed', 'failed', 'refunded');

-- 2. create users table (core info)
create table users (
    userid serial primary key,
    usertype user_role not null,
    name varchar(255) not null,
    email varchar(255) unique not null,
    phone varchar(20) unique not null,
    rating decimal(3, 1) check (rating >= 1.0 and rating <= 5.0)
);

-- 3. create driver extension table
create table driverdetails (
    driverid int primary key references users(userid) on delete cascade,
    vehicledetails varchar(255) not null,
    isactive boolean default true
);

-- 4. create riderequest table
create table riderequest (
    requestid serial primary key,
    passengerid int not null references users(userid),
    pickuplocation varchar(255) not null,
    dropofflocation varchar(255) not null,
    requesttime timestamp default current_timestamp,
    status request_status default 'pending'
);

-- 5. create ride table
create table ride (
    rideid serial primary key,
    driverid int not null references users(userid),
    passengerid int not null references users(userid),
    starttime timestamp not null,
    endtime timestamp,
    route text,
    fare decimal(10, 2) not null check (fare >= 0.00),
    constraint chk_passenger_driver check (driverid <> passengerid)
);

-- 6. create payment table
create table payment (
    paymentid serial primary key,
    rideid int not null references ride(rideid) on delete restrict,
    amount decimal(10, 2) not null check (amount >= 0.00),
    paymentmethod varchar(50) not null,
    paymentstatus payment_status_type default 'pending'
);

-- 7. add performance indexes
create index idx_ride_driver on ride(driverid);
create index idx_ride_passenger on ride(passengerid);
create index idx_request_passenger on riderequest(passengerid);
