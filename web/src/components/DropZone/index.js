import React from 'react';

import { Label, Input, Image } from './styles';

function DropZone({ name, style, source, alt, className, ...inputProps }) {
  return (
    <Label htmlFor={name} style={style} className={className}>
      <Input id={name} {...inputProps} className={className} />
      <Image src={source} alt={alt} className={className} />
    </Label>
  );
}

export default DropZone;
