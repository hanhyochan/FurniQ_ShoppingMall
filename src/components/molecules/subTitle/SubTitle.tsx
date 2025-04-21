import subTitleStyles from './subTitleStyle.module.css';
import Heading from '@/components/atoms/text/Headings/Headings';

interface SubTitleProps {
  children: React.ReactNode;
}

const SubTitle = ({ children }: SubTitleProps) => {
  return (
    <div className={subTitleStyles.triangle}>
      <Heading tag="heading2_sb" className={subTitleStyles.text}>
        {children}
      </Heading>
    </div>
  );
};

export default SubTitle;
