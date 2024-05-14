import { TreeSelect } from 'antd';
import type { SyntheticEvent } from 'react';
import React, { useState } from 'react';

const treeData = [
  {
    value: '2020',
    title: '2020',
    children: [
      {
        value: '理学院',
        title: '理学院',
        children: [
          {
            value: '20信计1',
            title: '20信计1',
          },
          {
            value: '20信计2',
            title: '20信计2',
          },
          {
            value: '20微电子2',
            title: '20微电子2',
          },
          {
            value: '20微电子1',
            title: '20微电子1',
          },
          {
            value: '20集成2',
            title: '20集成2',
          },
          {
            value: '20集成1',
            title: '20集成1',
          },
          {
            value: '20电科1',
            title: '20电科1',
          },
          {
            value: '20微数智2',
            title: '20微数智2',
          },
          {
            value: '20微数智1',
            title: '20微数智1',
          },
        ],
      },
    ],
  },
];
const MyTreeSelect: React.FC = () => {
  const [value, setValue] = useState<string>();

  const onChange = (newValue: string) => {
    setValue(newValue);
  };

  const onPopupScroll = (e: SyntheticEvent) => {
    console.log('onPopupScroll', e);
  };

  return (
    <TreeSelect
      showSearch
      style={{ width: '100%' }}
      value={value}
      dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
      placeholder="Please select"
      allowClear
      treeDefaultExpandAll
      onChange={onChange}
      treeData={treeData}
      onPopupScroll={onPopupScroll}
    />
  );
};

export default MyTreeSelect;
