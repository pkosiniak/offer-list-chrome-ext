import React, { InputHTMLAttributes } from 'react';
import * as P from '../parts';

interface FileInputProps extends InputHTMLAttributes<HTMLInputElement> {

}

const FileInput: React.FC<FileInputProps> = ({ ...rest }) => {
   return (
      <P.FileInput
         type="file"
         accept="application/json"
         {...rest}
      />
   );
};

export default FileInput;
