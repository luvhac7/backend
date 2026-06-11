
//1. payment methods define karna h
const supportedInstruments=[{
    method1:'basic-card',
    method2:'https://google.com/pay'
    data:{
      netowrks:['visa','mastercard','amex']
}}];
//2. tansaction details
const details={
  total:{
    label:'Total Due',
    amt:{currency:'INR',val:'29.99'}
  },
  displayItems: [ {
    lab:'Digital Book',
    amt:{currency: 'USD',val:'3434'}
  }]
};
//we will intitalize the req
async function checkout(){
  try{
    const req=new PaymentRequest(supportedInstruments,details);
    //check karenge ki browser ya device payment kar sakta h?
    if(await req.canMakePay()){
      const res=await req.show();
      //send res.details to backend server to change in process
      const status=await sentToServerForProcessing(res.detials);
      if(status.complete('success');
      {
        await res.complete('success');
      }else{
      await res.complete('fail');
    }
  }
}catch(error){
  console.error('Payment cancelled or failed:',error);
}
}
    
