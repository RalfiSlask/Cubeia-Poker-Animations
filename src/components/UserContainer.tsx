interface IUserContainerProps {
  zindex: string;
}

const UserContainer: React.FC<IUserContainerProps> = ({ zindex }) => {
  return (
    <div
      className={`bg-gray-800 rounded-md w-[200px] h-[80px] flex justify-center items-center absolute z-${zindex} bottom-0 shadow-black shadow-sm`}
    >
      <div>
        <h2>User</h2>
        <p>20000</p>
      </div>
    </div>
  );
};

export default UserContainer;
