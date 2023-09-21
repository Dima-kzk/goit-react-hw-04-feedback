import { Plea } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <>
      <Plea>{title}</Plea>
      {children}
    </>
  );
};
