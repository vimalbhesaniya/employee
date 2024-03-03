import Joi from "joi";
export const isValidStep1 = (email, password, confirmPassword) => {
  if (
    email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    ) &&
    password.length >= 8 &&
    confirmPassword.length >= 8 &&
    password === confirmPassword &&
    password.length != 0 &&
    confirmPassword.length != 0
  ) {
    return false;
  } else {
    return true;
  }
};

export const isValidStep2 = (firstName, lastName ,profilePicture) => {
     if (!firstName) {
    return true
 }
 if(!lastName){
    return true
 }
 if(!profilePicture){
    return true
 }
    return false
};
export const isValidStep3 = (state, city, personalAddress, pinCode) => {
  if (personalAddress.length > 2 && pinCode.length === 6 && state !== '' && city !== '') {
    return true;
  } else {
    return false;
  }
};

export const isValidStep4 = (institutionName, endDateSchool, startDateSchool) => {
  if (institutionName.length > 2 && endDateSchool !== '' && startDateSchool !== '') {
    return true;
  } else {
    return false;
  }
};
export const isValidStep5 = (jobTitle  , companyName , startDateWork , endDateWork , responsibilities , achievements) => {

  const schema = Joi.string().required().min(2)
  const schema1 = Joi.string().required().min(2)
  const schema4 = Joi.string().required().min(2)
  const schema5 = Joi.string().required().min(2)
  const date1 = Joi.date().required()
  const date2 = Joi.date().required()

  let result = schema.validate(jobTitle);
  let result1 = schema1.validate(companyName);
  let result2= date1.validate(startDateWork);
  let result3 = date2.validate(endDateWork);
  let result4 = schema4.validate(responsibilities);
  let result5 = schema5.validate(achievements);
  
   if (result.error ) {
    return false;
   }
   else if(result1.error)
   {
    return false;
   }
   else if(result2.error)
   {
    return false;
   }
   else if(result3.error)
   {
    return false;
   }
   else if(result4.error)
   {
    return false;
   }
   else if(result5.error)
   {
    return false;
   }
   else 
   return true;
};
export const isValidStep6 = (skills , profession , langauges ) => {
  const schema1 = Joi.string().required().min(2)
  const schema2 = Joi.string().required().min(2)
  const schema3 = Joi.string().required().min(2)
  const result1 = schema1.validate(skills)
  const result2 = schema2.validate(langauges)
  const result3 = schema3.validate(profession)
  if (result1.error) {
    return false
  }
  else if(result2.error){
    return false 
  }
  else if(result3.error)
  {
    return false
  }
  else 
  return true

};

