import axios from "axios";
import { createContext, useState, useEffect } from "react";
import { userDetail } from "../../api/Apis";

const AuthContext = createContext();

const initialvalues = {
  id: null,
  customer_id: "",
  name: "",
  email: "",
  country_code: "",
  mobile: "",
  role_id: null,
  email_verified_at: null,
  social_id: null,
  apple_id: null,
  social_type: null,
  apple_access_token: null,
  apple_refresh_token: null,
  avatar: null,
  csv_company: null,
  csv_accept_email_marketing: null,
  csv_accept_sms_marketing: null,
  csv_total_spent: "",
  csv_total_order: null,
  csv_tags: null,
  csv_shopify_import: null,
  is_online: null,
  is_block: null,
  checkout_status: null,
  step: null,
  checkout_customer_id: null,
  fast_fox_subscription: null,
  fast_fox_subscription_end_date: null,
  cancel_fastfox_at: null,
  checkout_fastfox_payment_token: null,
  checkout_fastfox_session_id: null,
  fastfox_instrument_id: null,
  is_fastfox_csv_import: null,
  is_admin_vendor: null,
  is_update_progress: null,
  csv_filename: null,
  created_at: "",
  updated_at: "",
  deleted_at: null,
  next_token: "",
  token: "",
  is_new_user: false,
  avatar_url: "",
};

export const AuthProvider = ({ children }) => {
  const [userDetails, setUserDetails] = useState(initialvalues);
  const token = localStorage.getItem("token");

  const currentUserDetail = async () => {
    if (token) {
      try {
        let response = await axios.get(userDetail, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUserDetails(response.data.result);
      } catch (error) {
        console.log("current user error", error);
      }
    }
  };

  useEffect(() => {
    currentUserDetail();
  }, []);

  return (
    <AuthContext.Provider
      value={{ userDetails, setUserDetails, initialvalues }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
