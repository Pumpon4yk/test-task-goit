import { Btn, Text } from '../Button/Button.styled';

const ButtonLoadmMore = ({ setPage }) => {
  return (
    <Btn
      onClick={() => setPage(prev => ++prev)}
      style={{ marginBottom: 50, marginTop: 30 }}
    >
      <Text>load more</Text>
    </Btn>
  );
};

export default ButtonLoadmMore;
