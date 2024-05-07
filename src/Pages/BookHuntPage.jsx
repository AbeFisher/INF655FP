import Layout from '../components/Layout/Layout';
import HuntsCalendar from '../components/Calendar/Calendar';
import bg_pic from '../Media/Images/AIV03508.jpg';
import BookForm from '../components/BookForm/BookForm';


const BookHuntPage = () => {

    return (
        <Layout>
            <div
                className="w-full h-full pt-[8rem] bg-no-repeat bg-cover text-[#680000] font-serif flex justify-center"
                style={{ backgroundImage: `url(${bg_pic})` }}
            >
                <div className="w-5/6 h-3/4 bg-orange-50 border-4 border-[#680000] rounded-[50px] 
                                py-20 pr-12 flex justify-end items-center">
                    <BookForm />
                    <div className="h-full w-3/5 text-xl font-semibold bg-[#FFFFFF] p-4 
                                    border-2 border-[#680000] rounded-[25px]">
                        <HuntsCalendar />
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default BookHuntPage
