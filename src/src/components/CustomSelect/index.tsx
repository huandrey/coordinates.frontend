import React from 'react';

import { SelectElement } from './styles';

function CustomSelect({ items, onChange, rest }: any) {

  return (
    <SelectElement
      onChange={onChange}
      {...rest}
    >
      <option value="" selected disabled hidden>
        Selecione uma instituição de ensino
      </option>

      {items?.map((item: any) => (
        <option key={item?.id} value={item?.id}>{`${item?.name} - ${item?.city}, ${item?.uf}`}</option>
      ))}
    </SelectElement>
  );
}

export default CustomSelect;