import { Spinner } from './ui/kibo-ui/spinner';

const PageLoader = () => {
    return (
      <div className="flex items-center justify-center w-full h-screen">
        <Spinner />
      </div>
    );
}

export default PageLoader;
