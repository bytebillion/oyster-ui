// import 'dotenv/config'
const config = {
  frontend: {
    url: process.env.REACT_APP_FRONTEND_URL,
  },
  backend: {
    baseUrl: process.env.REACT_APP_BACKEND_BASE_URL,
  },
  razorpay: {
    key: process.env.REACT_APP_RAZORPAY_KEY, //live
    // key: process.env.REACT_APP_RAZORPAY_TEST_KEY, //test
    
    planId: {
      student: process.env.REACT_APP_STUDENT_PLAN_ID,
      professional: process.env.REACT_APP_PROFESSIONAL_PLAN_ID,
      test: process.env.REACT_APP_TEST_PLAN_ID,
      basic: process.env.REACT_APP_BASIC_PLAN_ID,
      freelancer: process.env.REACT_APP_FREELANCER_PLAN_ID,
      // enterprise: process.env.REACT_APP_ENTERPRISE_PLAN_ID,
      enterprise: process.env.REACT_APP_STUDENT_PLAN_ID,

      indian_monthly: process.env.REACT_APP_INDIAN_MONTHLY_PLAN_ID,
      indian_yearly: process.env.REACT_APP_INDIAN_YEARLY_PLAN_ID,
      international_monthly: process.env.REACT_APP_INTERNATIONAL_MONTHLY_PLAN_ID,
      international_yearly: process.env.REACT_APP_INTERNATIONAL_YEARLY_PLAN_ID,

      indian_lifetime_free_1: process.env.REACT_APP_INDIAN_LIFETIME_FREE_PLAN_ID_1,
      indian_lifetime_free_2: process.env.REACT_APP_INDIAN_LIFETIME_FREE_PLAN_ID_2,

      discount_ltd_1: process.env.REACT_APP_DISCOUNT_LIFETIME_FREE_PLAN_LTD1,
      discount_ltd_2: process.env.REACT_APP_DISCOUNT_LIFETIME_FREE_PLAN_LTD2,
      discount_monthly: process.env.REACT_APP_OYSTER_DISCOUNT_FREELANCER_PLAN,
      discount_yearly: process.env.REACT_APP_OYSTER_DISCOUNT_YEARLY_PLAN,
    },
  },
};

export default config;
