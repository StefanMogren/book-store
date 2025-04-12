import BookList from './BookList';
import { useOutletContext } from 'react-router-dom';
import Header from './Header';
import NoUser from './NoUser';

function BookStore() {
	const { userLogin } = useOutletContext();

	const initialization = () => {
		if (userLogin) {
			return (
				<>
					<Header />
					<BookList />
				</>
			);
		} else {
			return <NoUser />;
		}
	};

	return <>{initialization()}</>;
}

export default BookStore;
