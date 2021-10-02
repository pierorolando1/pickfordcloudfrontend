import { gql } from "@apollo/client";

export const UPLOAD_IMAGE = gql`
  mutation imageUpload($file: Upload!) {
    imageUpload(file: $file)
  }
`