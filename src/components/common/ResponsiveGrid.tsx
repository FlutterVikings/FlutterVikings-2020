import styled from 'styled-components';

export const ResponsiveGrid = styled.div<{ size?: number }>`
  --auto-grid-min-size: ${(props) => (props.size ? props.size : '16')}rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(var(--auto-grid-min-size), 1fr));
  grid-gap: 1rem;
`;
