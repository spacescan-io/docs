import React, { useState } from 'react';
import TabItem from '@theme/TabItem';
import ApiCallExample from './ApiCallExample';

function ApiResponseTab({ endpoint }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <TabItem 
      value="Response" 
      label="Response"
      default
    >
      <ApiCallExample endpoint={endpoint} isActive={isActive} onTabClick={() => setIsActive(true)} />
    </TabItem>
  );
}

export default ApiResponseTab;
