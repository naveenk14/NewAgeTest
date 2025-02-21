import * as Types from "../ActionTypes";
export const uploadDocumentAction = ({
  image_upload: [{ unique_id, file_name, file_content, file_type }],
  user_token,
  ebooking_no,
  ebooking_document,
  sl_no,
}) => ({
  type: Types.UPLOAD_DOCUMENT_REQUEST,
  payload: {
    image_upload: [{ unique_id, file_name, file_content, file_type }],
    user_token,
    ebooking_no,
    ebooking_document,
    sl_no,
  },
});
