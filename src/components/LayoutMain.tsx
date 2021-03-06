import * as React from 'react';
import styled from '@emotion/styled';

import { heights } from '../styles/variables';

const StyledLayoutMain = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: calc(
    (
        ${typeof window !== 'undefined' ? window.innerHeight : '100vh'} -
          ${heights.footer + heights.header}
      )
      px
  );
`;

interface LayoutMainProps {
  className?: string;
}

const LayoutMain: React.FC<LayoutMainProps> = ({ children, className }) => (
  <StyledLayoutMain className={className}>{children}</StyledLayoutMain>
);

export default LayoutMain;
