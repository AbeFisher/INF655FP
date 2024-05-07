import React, { useContext } from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import HuntsContext from '../../Context/HuntsContext';
import moment from 'moment';

const BookForm = () => {
    const { addHunt } = useContext(HuntsContext);

    const formik = useFormik({
        initialValues: {
            name: '',
            startDate: '',
            endDate: '',
            // Status: 'pending',       //  in DB, not on form
            package: '',
            numHunters: '',
            guided: false,
            dogs: false,
            lodging: false,
        },

        validationSchema: Yup.object({
            name: Yup.string()
                .max(30, 'Name must be 30 characters or less.')
                .required("Name is required."),
            startDate: Yup.date().required("Start Date is required."),
            endDate: Yup.date().required("End Date is required."),
            package: Yup.string().optional(),
            numHunters: Yup.number('must be a number')
                .required('Number of Hunters is required')
                .positive('must be a positive number')
                .integer('must be an integer number'),
            guided: Yup.boolean('must true or false')
                .required('Guided option is required'),
            dogs: Yup.boolean('must true or false')
                .required('Dogs option is required'),
            lodging: Yup.boolean('must true or false')
                .required('Lodging option is required'),
        }),

        onSubmit: (values) => {
            //  create new record in Hunts DB table
            
            
            //  Add new hunt booking to calendar

            try {
                addHunt(
                    [
                        {
                            start: moment(values.startDate).toDate(),
                            end: moment(values.endDate).toDate(),
                            title: "Booked",
                        },
                    ]
                );
            } catch (err) {
                alert(err);
            }

            //  clear form for next time
            formik.resetForm();
        },

    })

    const inputBox = "text-2xl p-4 h-10 w-96 mx-2 mb-4 rounded-md border-2 border-[#680000] placeholder-[#BE7D3C]";
    const errorClass = "block h-6 ml-[8.5rem] text-base text-red-800 italic";
    const lblSection = "flex items-center ml-4";
    const label = "text-xl w-24 font-semibold mb-3";

    return (
        <div className="h-full w-2/5 mx-8">
            <div className="text-[3rem] font-semibold text-[#680000] text-center mb-8">
                <p>Add New Booking</p>
            </div>

            <form onSubmit={ formik.handleSubmit } className="h-full">
                <div className="text-left h-fit mb-12 ">

                    <div>
                        <label htmlFor="name" className={errorClass}>
                            {formik.errors.name ? formik.errors.name : ' ' }
                        </label>
                        <div className={lblSection}>
                            <p className={label}>Name</p>
                            <input
                                type='text'
                                className={inputBox}
                                name='name'
                                placeholder='Full Name'
                                onChange={formik.handleChange}
                                value={formik.values.name}
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="startDate" className={errorClass}>
                            {formik.errors.startDate ? formik.errors.startDate : ' ' }
                        </label>
                        <div className={lblSection}>
                            <p className={label}>Start Date</p>
                            <input
                                type='text'
                                className={inputBox}
                                name='startDate'
                                placeholder='Start Date (MM/DD/YYYY)'
                                onChange={formik.handleChange}
                                value={formik.values.startDate}
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="endDate" className={errorClass}>
                            {formik.errors.endDate ? formik.errors.endDate : ' ' }
                        </label>
                        <div className={lblSection}>
                            <p className={label}>End Date</p>
                            <input
                                type='text'
                                className={inputBox}
                                name='endDate'
                                placeholder='End Date (MM/DD/YYYY)'
                                onChange={formik.handleChange}
                                value={formik.values.endDate}
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="package" className={errorClass}>
                            {formik.errors.package ? formik.errors.package : ' ' }
                        </label>
                        <div className={lblSection}>
                            <p className={label}>Package</p>
                            <input
                                type='text'
                                className={inputBox}
                                name='package'
                                placeholder='Package name'
                                onChange={formik.handleChange}
                                value={formik.values.package}
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="numHunters" className={errorClass}>
                            {formik.errors.numHunters ? formik.errors.numHunters : ' ' }
                        </label>
                        <div className={lblSection}>
                            <p className={label}>Hunters</p>
                            <input
                                type='text'
                                className={inputBox}
                                name='numHunters'
                                placeholder='Number of hunters in your party'
                                onChange={formik.handleChange}
                                value={formik.values.numHunters}
                            />
                        </div>
                    </div>

                </div>
    
                <div className="ml-24 mt-24">
                    <button 
                        type='submit' 
                        className="w-3/4 h-16 rounded-[25px] mx-auto bg-[#680000] 
                                    text-3xl font-semibold text-orange-200 "
                    >Book Hunt</button>
                </div>

            </form>
            
        </div>

    )
}

export default BookForm
