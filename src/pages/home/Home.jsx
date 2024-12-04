import React, { useContext, useEffect, useState } from 'react';
import Button from '../../components/clicks/button/Button';
import Links from '../../components/clicks/links/Links';
import { HomePostSlideSection, HomeTopSection, HomeTopSectionContent, HomeTopSectionLeft, HomeTopSectionRight, HomeTopSectionRightContent, HomeWrapper, PostCategory, RecentPostWrapper, RecentWrapper, WrapperDiv, RecentPost, RecentPostImg, RecentPostContent, PostTitleStyled, PostIconStyled, EditStyled, EditIconStyled, EditTitledStyled, AuthorStyled, AuthorIconStyled, AuthorTitledStyled, DateStyled, DateIconStyled, DateTitledStyled, PostLink, EnternCat, EnterRecent, EnterCat, EntertainCatWrapper, CatWrapper, CategorList, CategoryListItem, MarginTop, FashionCat, FashionCatImag, FashionCatText, Ads, SocialMedia, SocialListItem, Subscibe, SubscibeWrapper, InputStyled, VideoWrapper, VideoCover, VideoPlayIcon, VideoOverlay, VideoAuthor, VideoTitle, InputHorizontalWrapper, FormWrapper, HideContentWrapper, SuccessIcon, NavigationStyle } from './Home.style';
import Input from '../../components/input_2/Input';
import TextArea from '../../components/textarea/TextArea';
import SelectInput from '../../components/selectInput/SelectInput';
import axios from 'axios';
import Overlay from '../../components/overlay/Overlay';
import {GiCheckMark} from 'react-icons/gi'
import ButtonLoader from '../../components/clicks/button/button_loader/ButtonLoader';
import { useNavigate } from 'react-router-dom';



const Home = () => {

    const [showSuccessCard, setShowSuccessCard ] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
  

    // Category data selection
const category = [
    { title: 'Select Category', value: '' },
    { title: 'Graduate', value: 'Graduate' },
    { title: 'Entrepreneur', value: 'Entrepreneur' },
    { title: 'Student', value: 'Student' },
  ];


//   Varaibles
    const [firstName, setFirstName] = useState('');
    const [firstNameError, setFirstNameError] = useState(false);

    const [lastName, setLastName] = useState('');
    const [lastNameError, setLastNameError] = useState(false);

    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState(false);

    const [phoneNumber, setPhoneNumber] = useState('');
    const [phoneNumberError, setPhoneNumberError] = useState(false);

    const [shopAddress, setShopAddress] = useState('');
    const [shopAddressError, setShopAddressError] = useState(false);

    const [selectedCategory, setSelectedCategory] = useState(''); 
    const [selectedCategoryError, setSelectedCategoryError] = useState(false); 


    // Graduate Variables:
    const [nameOfSchoolG, setNameOfSchoolG] = useState('');
    const [nameOfSchoolGError, setNameOfSchoolGError] = useState(false);
    const [yearOfGraduateG, setYearOfGraduateG] = useState('');
    const [yearOfGraduateGError, setYearOfGraduateGError] = useState(false);
    const [courseOfStudyG, setCourseOfStudyG] = useState('');
    const [courseOfStudyGError, setCourseOfStudyGError] = useState(false);

   

    // Entrepreneur Variabels

    const [selectedSupportType, setselectedSupportType] = useState('');
    const [selectedSupportTypeError, setselectedSupportTypeError] = useState(false);
   
    const supportType = [
        { title: 'Select Support Type', value: '' },
        { title: 'Equipment', value: 'Equipment' },
        { title: 'Grant', value: 'Grant' },
      ];

    
    // Student Variables:
    const [nameOfSchoolS, setNameOfSchoolS] = useState('');
    const [nameOfSchoolSError, setNameOfSchoolSError] = useState(false);
    const [courseOfStudyS, setCourseOfStudyS] = useState('');
    const [courseOfStudySError, setCourseOfStudySError] = useState(false);
    const [levelS, setLevelS] = useState('');
    const [levelSError, setLevelSError] = useState(false);

   
    const [showGraduate, setShowGraduate] = useState(false);
    const [showEntreprenuer, setShowEntreprenuer] = useState(false);
    const [showStudent, setShowStudent] = useState(false);
    


    const handleValueChange = (type, e) => {
        if (type === 'First Name') {
            setFirstName(e.target.value);
            setFirstNameError(false);
        } else if (type === 'Last Name') {
            setLastName(e.target.value);
            setLastNameError(false);
        }else if (type === 'Email') {
            setEmail(e.target.value);
            setEmailError(false);
        }else if (type === 'Phone Number') {
            setPhoneNumber(e.target.value);
            setPhoneNumberError(false);
        } else if (type === 'Shop Address') {
            setShopAddress(e.target.value);
            setShopAddressError(false);
        }else if (type === 'category') {
            setSelectedCategory(e.target.value);
            setSelectedCategoryError(false);

    // Set the correct show state based on category
                if (e.target.value === 'Graduate') {
                    setShowGraduate(true);
                    setShowEntreprenuer(false);
                    setShowStudent(false);
                } else if (e.target.value === 'Entrepreneur') {
                    setShowGraduate(false);
                    setShowEntreprenuer(true);
                    setShowStudent(false);
                } else if (e.target.value === 'Student') {
                    setShowGraduate(false);
                    setShowEntreprenuer(false);
                    setShowStudent(true);
                } else {
                    // Reset all sections if no category is selected
                    setShowGraduate(false);
                    setShowEntreprenuer(false);
                    setShowStudent(false);
                }

        }else if (type === 'NameOfSchoolG') {
            setNameOfSchoolG(e.target.value);
            setNameOfSchoolGError(false);
        }else if (type === 'YearOfGraduation') {
            setYearOfGraduateG(e.target.value);
            setYearOfGraduateGError(false);
        }else if (type === 'courseOfStudyG') {
            setCourseOfStudyG(e.target.value);
            setCourseOfStudyGError(false);
        }else if (type === 'Support Type') {
            setselectedSupportType(e.target.value);
            setselectedSupportTypeError(false);
        }else if (type === 'nameOfSchoolS') {
            setNameOfSchoolS(e.target.value);
            setNameOfSchoolSError(false);
        }else if (type === 'CourseOfStudy') {
            setCourseOfStudyS(e.target.value);
            setCourseOfStudySError(false);
        }else if (type === 'Level') {
            setLevelS(e.target.value);
            setLevelSError(false);
        }
    };

    // Handle form submission
  const handleSubmit = async (e) => {
            e.preventDefault();

            let isValid = true;

            // Validate common fields
            if (!firstName) {
            setFirstNameError(true);
            isValid = false;
            }
            if (!lastName) {
            setLastNameError(true);
            isValid = false;
            }
            if (!email) {
            setEmailError(true);
            isValid = false;
            }
            if (!phoneNumber) {
            setPhoneNumberError(true);
            isValid = false;
            }
            if (!shopAddress) {
            setShopAddressError(true);
            isValid = false;
            }
            if (!selectedCategory) {
            setSelectedCategoryError(true);
            isValid = false;
            }

            // Validate fields based on selected category
            if (selectedCategory === 'Graduate') {
            if (!nameOfSchoolG) {
                setNameOfSchoolGError(true);
                isValid = false;
            }
            if (!yearOfGraduateG) {
                setYearOfGraduateGError(true);
                isValid = false;
            }
            if (!courseOfStudyG) {
                setCourseOfStudyGError(true);
                isValid = false;
            }
            } else if (selectedCategory === 'Entrepreneur') {
            if (!selectedSupportType) {
                setselectedSupportTypeError(true);
                isValid = false;
            }
            } else if (selectedCategory === 'Student') {
            if (!nameOfSchoolS) {
                setNameOfSchoolSError(true);
                isValid = false;
            }
            if (!courseOfStudyS) {
                setCourseOfStudySError(true);
                isValid = false;
            }
            if (!levelS) {
                setLevelSError(true);
                isValid = false;
            }
            }

            if (isValid) {
                const newUser = {
                    firstName,
                    lastName,
                    email,
                    phoneNumber,
                    shopAddress,
                    selectedCategory,
                    nameOfSchoolG,
                    yearOfGraduateG,
                    courseOfStudyG,
                    selectedSupportType,
                    nameOfSchoolS,
                    courseOfStudyS,
                    levelS,
                }
                setIsLoading(true)
                try {
                    const res = await axios.post(process.env.REACT_APP_URL+'/api/users', newUser)
                    console.log(res.data);
                    setIsLoading(false);
                    // Reset form values
                   setShowSuccessCard(true);
                } catch (error) {
                    setIsLoading(false)
                    console.log(error)
                }
            }
  };


   const handleCloseSucessCard = () =>{
        setFirstName('');
        setLastName('');
        setEmail('');
        setPhoneNumber('');
        setShopAddress('');
        setSelectedCategory('');
        setNameOfSchoolG('')
        setYearOfGraduateG('')
        setCourseOfStudyG('')
        setselectedSupportType('')
        setNameOfSchoolS('')
        setCourseOfStudyS('')
        setLevelS('')
        setShowSuccessCard(false);
  
   }

    return (
        <HomeWrapper>
            <FormWrapper onSubmit={handleSubmit}>
                <InputHorizontalWrapper>
                    <Input
                        title={'First Name'}
                        value={firstName}
                        requiredSymbol={'*'}
                        label={'First Name'}
                        type={'text'}
                        inputPadding={'20px'}
              
                        onChange={(e) => handleValueChange('First Name', e)}
                        error={firstNameError}
                    />

                    <Input
                        title={'Last Name'}
                        value={lastName}
                        requiredSymbol={'*'}
                        label={'Last Name'}
                        type={'text'}
                        inputPadding={'20px'}
                    
                        onChange={(e) => handleValueChange('Last Name', e)}
                        error={lastNameError}
                    />
                </InputHorizontalWrapper>

                <InputHorizontalWrapper>
                <Input
                        title={'Email'}
                        value={email}
                        requiredSymbol={'*'}
                        label={'Email'}
                        type={'email'}
                        inputPadding={'20px'}
                 
                        onChange={(e) => handleValueChange('Email', e)}
                        error={emailError}
                    />

                    <Input
                        title={'Phone Number'}
                        value={phoneNumber}
                        requiredSymbol={'*'}
                        label={'Phone Number'}
                        type={'text'}
                        inputPadding={'20px'}
                   
                        onChange={(e) => handleValueChange('Phone Number', e)}
                        error={phoneNumberError}
                    />

                </InputHorizontalWrapper>

                <TextArea
                    title={'Shop Address'}
                    value={shopAddress}
                    requiredSymbol={'*'}
                    label={'Shop Address'}
                    inputPadding={'20px'}
                    InputWidth={'100%'}
                    onChange={(e) => handleValueChange('Shop Address', e)}
                    error={shopAddressError}
                />

                    <SelectInput 
                        label={"Category"}
                          options={category} 
                          title={'Category'} 
                          error={selectedCategoryError} 
                          onChange={(e)=>handleValueChange('category', e)}
                      />


                  {/* Graduate */}
                 { showGraduate &&  <HideContentWrapper>
                   <InputHorizontalWrapper>
                        <Input
                                title={'Name of School'}
                                value={nameOfSchoolG}
                                requiredSymbol={'*'}
                                label={'Name of School'}
                                type={'text'}
                                inputPadding={'20px'}
                                onChange={(e) => handleValueChange('NameOfSchoolG', e)}
                                error={nameOfSchoolGError}
                            />
                        
                        <Input
                            title={'Year of Graduation'}
                            value={yearOfGraduateG}
                            requiredSymbol={'*'}
                            label={'Year of Graduation'}
                            type={'date'}
                            inputPadding={'20px'}
                            onChange={(e) => handleValueChange('YearOfGraduation', e)}
                            error={yearOfGraduateGError}
                        />
                        <Input
                            title={'Course Of Study'}
                            value={courseOfStudyG}
                            requiredSymbol={'*'}
                            label={'Course Of Study'}
                            type={'text'}
                            inputPadding={'20px'}
                            onChange={(e) => handleValueChange('courseOfStudyG', e)}
                            error={courseOfStudyGError}
                        />
                    </InputHorizontalWrapper>
     
                   </HideContentWrapper>
                   }

                    {/* Entrepreneur */}
                   {showEntreprenuer && <HideContentWrapper>
                    <SelectInput 
                        label={"Support Type"}
                          options={supportType} 
                          title={'Support Type'} 
                          error={selectedSupportTypeError} 
                          onChange={(e)=>handleValueChange('Support Type', e)}
                      />

                    </HideContentWrapper>}


                    {/* Student */}
                   {showStudent && <HideContentWrapper>
                        <InputHorizontalWrapper>
                            <Input
                                    title={'Name of School'}
                                    value={nameOfSchoolS}
                                    requiredSymbol={'*'}
                                    label={'Name of School'}
                                    type={'text'}
                                    inputPadding={'20px'}
                                    onChange={(e) => handleValueChange('nameOfSchoolS', e)}
                                    error={nameOfSchoolSError}
                                />
                            
                            <Input
                                title={'Course of Study'}
                                value={courseOfStudyS}
                                requiredSymbol={'*'}
                                label={'Course of Study'}
                                type={'text'}
                                inputPadding={'20px'}
                                onChange={(e) => handleValueChange('CourseOfStudy', e)}
                                error={courseOfStudySError}
                            />
                            <Input
                                title={'Level'}
                                value={levelS}
                                requiredSymbol={'*'}
                                label={'Level'}
                                type={'text'}
                                inputPadding={'20px'}
                                onChange={(e) => handleValueChange('Level', e)}
                                error={levelSError}
                            />
                        </InputHorizontalWrapper>
                    </HideContentWrapper>
}
                {/* button */}
                <div>
                    <Button btnPd={"10px 15px"} btnText={isLoading ? <ButtonLoader text={'Submitting'}/>: 'Submit'} btnColor={'green'} />
                </div>
            </FormWrapper>

            {showSuccessCard && 
            <Overlay
              btnDisplayNo={"none"}
              closeOverlayOnClick={handleCloseSucessCard}
              overlayButtonClick={handleCloseSucessCard}
            >
                <SuccessIcon>
                    <GiCheckMark />
                </SuccessIcon>
                <p>We have received your information and will get in touch with you soon</p>
            </Overlay>}

        </HomeWrapper>
    );
};

export default Home;
