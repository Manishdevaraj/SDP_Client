import { useEffect, useState } from 'react';
import { Avatar, Box, Button, Flex, Grid, Input, Text, Textarea, FormControl, FormLabel, FormErrorMessage } from '@chakra-ui/react';
import { UsedbContext } from '../../Services/DbContext';
import { UpdateProfile } from '../../Services/Api';

function Profile() {
  
  const { dbUser,upload_avatar_firbase } = UsedbContext();

  
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [dob, setDob] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [skills, setSkills] = useState('');
  const [experience, setExperience] = useState('');
  const [medicalCert, setMedicalCert] = useState(null);
  const [resume, setResume] = useState(null);
  const [areasOfInterest, setAreasOfInterest] = useState('');
  const [linkedinURL, setLinkedinURL] = useState('');
  const [bankAccountHolderName, setBankAccountHolderName] = useState('');
  const [bankAccNo, setBankAccNo] = useState('');
  const [bankIFSC, setBankIFSC] = useState('');
  const [bankName, setBankName] = useState('');
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (dbUser) {
      setFullName(dbUser.profile.name);
      setPhone(dbUser.profile.phone);
      setEmail(dbUser.email);
      setDob(dbUser.profile.dob);
      setStreet(dbUser.profile.street);
      setCity(dbUser.profile.city);
      setState(dbUser.profile.state);
      setZipCode(dbUser.profile.zipCode);
      setSkills(dbUser.profile.skills);
      setExperience(dbUser.profile.experience);
      setAreasOfInterest(dbUser.profile.areasOfInterest);
      setLinkedinURL(dbUser.profile.linkedinURL);
      setBankAccountHolderName(dbUser.profile.bankAccountHolderName);
      setBankAccNo(dbUser.profile.bankAccNo);
      setBankIFSC(dbUser.profile.bankIFSC);
      setBankName(dbUser.profile.bankName);
    }
  }, [dbUser]);

  const handleImageUpload = async(event) => {
    const image = event.target.files[0];
    console.log(image);
    const name=image.name+Date.now();
    await upload_avatar_firbase(image,name,dbUser.id)
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'fullName':
        setFullName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'phone':
        setPhone(value);
        break;
      case 'dob':
        setDob(value);
        break;
      case 'street':
        setStreet(value);
        break;
      case 'city':
        setCity(value);
        break;
      case 'state':
        setState(value);
        break;
      case 'zipCode':
        setZipCode(value);
        break;
      case 'skills':
        setSkills(value);
        break;
      case 'experience':
        setExperience(value);
        break;
      case 'areasOfInterest':
        setAreasOfInterest(value);
        break;
      case 'linkedinURL':
        setLinkedinURL(value);
        break;
      case 'bankAccountHolderName':
        setBankAccountHolderName(value);
        break;
      case 'bankAccNo':
        setBankAccNo(value);
        break;
      case 'bankIFSC':
        setBankIFSC(value);
        break;
      case 'bankName':
        setBankName(value);
        break;
      default:
        break;
    }
  };

  const handleFileChange = (event) => {
    const { name, files } = event.target;
    if (files.length > 0) {
      const file = files[0];
      if (name === 'medicalCert') {
        setMedicalCert(file);
      } else if (name === 'resume') {
        setResume(file);
      }
    }
  };

  const handleSubmit = async(event) => {
    event.preventDefault();
     await UpdateProfile({name:fullName,email:email,phone:phone,dob:dob,street:street,city:city,state:state,zipCode:zipCode,skills:skills,experience:experience,areasOfInterest:areasOfInterest,linkedinURL:linkedinURL,bankAccountHolderName:bankAccountHolderName,bankAccNo:bankAccNo,bankIFSC:bankIFSC,bankName:bankName},dbUser.profile.id);
  };

  return (
    <Flex direction="column" minHeight="100vh" bg="#dcdee0">
      <Box flex="1" p="8">
        <Box
          maxWidth="1200px"
          mx="auto"
          bg="rgba(255, 255, 255, 0.8)"
          boxShadow="md"
          borderRadius="md"
          p="6"
          backdropFilter="blur(20000px)"
          border="1px solid rgba(255, 255, 255, 0.2)"
        >
          <form onSubmit={handleSubmit}>
            <Grid templateColumns={{ base: '1fr', lg: '1fr 3fr' }} gap={6} pt={5}>
              <Box textAlign="center">
                <Avatar size="xl" src={dbUser?.avatar} name={dbUser?.name} mb="4" />
                <Button as="label" colorScheme="blue" cursor="pointer" mb="4" marginTop={1} marginLeft={5}>
                  Upload Your Image
                  <Input
                    type="file"
                    accept="image/png, image/jpeg"
                    onChange={handleImageUpload}
                    hidden
                  />
                </Button>
              </Box>

              <Box>
                <Text fontSize="lg" fontWeight="bold" color="blue.500" mb="3">Personal Details</Text>
                <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={4}>
                  <FormControl isInvalid={!!errors.fullName} mb="4">
                    <FormLabel color="black">Full Name</FormLabel>
                    <Input
                      name="fullName"
                      value={fullName}
                      onChange={handleChange}
                      placeholder="Enter full name"
                      border="1px solid #0a0a0a"
                      borderColor="#cfd1d8"
                      color="black"
                      required
                    />
                    {errors.fullName && <FormErrorMessage>{errors.fullName}</FormErrorMessage>}
                  </FormControl>
                  <FormControl isInvalid={!!errors.email} mb="4">
                    <FormLabel color="black">Email</FormLabel>
                    <Input
                      name="email"
                      type="email"
                      value={email}
                      onChange={handleChange}
                      placeholder="Enter email ID"
                      border="1px solid #cfd1d8"
                      borderColor="#cfd1d8"
                      color="black"
                      required
                    />
                    {errors.email && <FormErrorMessage>{errors.email}</FormErrorMessage>}
                  </FormControl>
                  <FormControl isInvalid={!!errors.phone} mb="4">
                    <FormLabel color="black">Phone</FormLabel>
                    <Input
                      name="phone"
                      value={phone}
                      onChange={handleChange}
                      placeholder="Enter phone number"
                      border="1px solid #cfd1d8"
                      borderColor="#cfd1d8"
                      color="black"
                      required
                    />
                    {errors.phone && <FormErrorMessage>{errors.phone}</FormErrorMessage>}
                  </FormControl>
                  <FormControl isInvalid={!!errors.dob} mb="4">
                    <FormLabel color="black">Date of Birth</FormLabel>
                    <Input
                      name="dob"
                      type="date"
                      value={dob}
                      onChange={handleChange}
                      border="1px solid #cfd1d8"
                      borderColor="#cfd1d8"
                      color="black"
                      required
                      sx={{
                        '::after': {
                          content: '"📅"', // Calendar emoji
                          color: 'black',
                          fontSize: '1.2em',
                          position: 'absolute',
                          right: '10px',
                          top: '50%',
                          transform: 'translateY(-50%)',
                          pointerEvents: 'none'
                        },
                        position: 'relative'
                      }}
                    />
                    {errors.dob && <FormErrorMessage>{errors.dob}</FormErrorMessage>}
                  </FormControl>
                </Grid>

                <Text fontSize="lg" fontWeight="bold" color="blue.500" mt="8" mb="4">Address</Text>
                <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={4}>
                  <FormControl isInvalid={!!errors.street} mb="4">
                    <FormLabel color="black">Street</FormLabel>
                    <Input
                      name="street"
                      value={street}
                      onChange={handleChange}
                      placeholder="Enter Street"
                      border="1px solid #cfd1d8"
                      borderColor="#cfd1d8"
                      color="black"
                      required
                    />
                    {errors.street && <FormErrorMessage>{errors.street}</FormErrorMessage>}
                  </FormControl>
                  <FormControl isInvalid={!!errors.city} mb="4">
                    <FormLabel color="black">City</FormLabel>
                    <Input
                      name="city"
                      value={city}
                      onChange={handleChange}
                      placeholder="Enter City"
                      border="1px solid #cfd1d8"
                      borderColor="#cfd1d8"
                      color="black"
                      required
                    />
                    {errors.city && <FormErrorMessage>{errors.city}</FormErrorMessage>}
                  </FormControl>
                  <FormControl isInvalid={!!errors.state} mb="4">
                    <FormLabel color="black">State</FormLabel>
                    <Input
                      name="state"
                      value={state}
                      onChange={handleChange}
                      placeholder="Enter State"
                      border="1px solid #cfd1d8"
                      borderColor="#cfd1d8"
                      color="black"
                      required
                    />
                    {errors.state && <FormErrorMessage>{errors.state}</FormErrorMessage>}
                  </FormControl>
                  <FormControl isInvalid={!!errors.zipCode} mb="4">
                    <FormLabel color="black">Zip Code</FormLabel>
                    <Input
                      name="zipCode"
                      value={zipCode}
                      onChange={handleChange}
                      placeholder="Enter Zip Code"
                      border="1px solid #cfd1d8"
                      borderColor="#cfd1d8"
                      color="black"
                      required
                    />
                    {errors.zipCode && <FormErrorMessage>{errors.zipCode}</FormErrorMessage>}
                  </FormControl>
                </Grid>

                <Text fontSize="lg" fontWeight="bold" color="blue.500" mt="8" mb="4">Professional Details</Text>
                <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={4}>
                  <FormControl isInvalid={!!errors.skills} mb="4">
                    <FormLabel color="black">Skills</FormLabel>
                    <Textarea
                      name="skills"
                      value={skills}
                      onChange={handleChange}
                      placeholder="Enter Skills"
                      border="1px solid #cfd1d8"
                      borderColor="#cfd1d8"
                      color="black"
                      required
                    />
                    {errors.skills && <FormErrorMessage>{errors.skills}</FormErrorMessage>}
                  </FormControl>
                  <FormControl isInvalid={!!errors.experience} mb="4">
                    <FormLabel color="black">Experience</FormLabel>
                    <Textarea
                      name="experience"
                      value={experience}
                      onChange={handleChange}
                      placeholder="Enter Experience"
                      border="1px solid #cfd1d8"
                      borderColor="#cfd1d8"
                      color="black"
                      required
                    />
                    {errors.experience && <FormErrorMessage>{errors.experience}</FormErrorMessage>}
                  </FormControl>
                  <FormControl isInvalid={!!errors.areasOfInterest} mb="4">
                    <FormLabel color="black">Areas of Interest</FormLabel>
                    <Textarea
                      name="areasOfInterest"
                      value={areasOfInterest}
                      onChange={handleChange}
                      placeholder="Enter Areas of Interest"
                      border="1px solid #cfd1d8"
                      borderColor="#cfd1d8"
                      color="black"
                      required
                    />
                    {errors.areasOfInterest && <FormErrorMessage>{errors.areasOfInterest}</FormErrorMessage>}
                  </FormControl>
                  <FormControl isInvalid={!!errors.linkedinURL} mb="4">
                    <FormLabel color="black">LinkedIn Profile URL</FormLabel>
                    <Input
                      name="linkedinURL"
                      value={linkedinURL}
                      onChange={handleChange}
                      placeholder="Enter LinkedIn Profile URL"
                      border="1px solid #cfd1d8"
                      borderColor="#cfd1d8"
                      color="black"
                      required
                    />
                    {errors.linkedinURL && <FormErrorMessage>{errors.linkedinURL}</FormErrorMessage>}
                  </FormControl>
                </Grid>

                <Text fontSize="lg" fontWeight="bold" color="blue.500" mt="8" mb="4">Documents</Text>
                <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={4}>
                  <FormControl isInvalid={!!errors.medicalCert} mb="4">
                    <FormLabel color="black">Medical Certificate</FormLabel>
                    <Input
                      name="medicalCert"
                      type="file"
                      onChange={handleFileChange}
                      accept=".pdf, .doc, .docx, .jpeg, .jpg, .png"
                      border="1px solid #cfd1d8"
                      borderColor="#cfd1d8"
                      color="black"
                      // required
                    />
                    {errors.medicalCert && <FormErrorMessage>{errors.medicalCert}</FormErrorMessage>}
                  </FormControl>
                  <FormControl isInvalid={!!errors.resume} mb="4">
                    <FormLabel color="black">Resume</FormLabel>
                    <Input
                      name="resume"
                      type="file"
                      onChange={handleFileChange}
                      accept=".pdf, .doc, .docx"
                      border="1px solid #cfd1d8"
                      borderColor="#cfd1d8"
                      color="black"
                      // required
                    />
                    {errors.resume && <FormErrorMessage>{errors.resume}</FormErrorMessage>}
                  </FormControl>
                </Grid>

                <Text fontSize="lg" fontWeight="bold" color="blue.500" mt="8" mb="4">Bank Details</Text>
                <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={4}>
                  <FormControl isInvalid={!!errors.bankAccountHolderName} mb="4">
                    <FormLabel color="black">Account Holder Name</FormLabel>
                    <Input
                      name="bankAccountHolderName"
                      value={bankAccountHolderName}
                      onChange={handleChange}
                      placeholder="Enter Account Holder Name"
                      border="1px solid #cfd1d8"
                      borderColor="#cfd1d8"
                      color="black"
                      required
                    />
                    {errors.bankAccountHolderName && <FormErrorMessage>{errors.bankAccountHolderName}</FormErrorMessage>}
                  </FormControl>
                  <FormControl isInvalid={!!errors.bankAccNo} mb="4">
                    <FormLabel color="black">Account Number</FormLabel>
                    <Input
                      name="bankAccNo"
                      value={bankAccNo}
                      onChange={handleChange}
                      placeholder="Enter Account Number"
                      border="1px solid #cfd1d8"
                      borderColor="#cfd1d8"
                      color="black"
                      required
                    />
                    {errors.bankAccNo && <FormErrorMessage>{errors.bankAccNo}</FormErrorMessage>}
                  </FormControl>
                  <FormControl isInvalid={!!errors.bankIFSC} mb="4">
                    <FormLabel color="black">IFSC Code</FormLabel>
                    <Input
                      name="bankIFSC"
                      value={bankIFSC}
                      onChange={handleChange}
                      placeholder="Enter IFSC Code"
                      border="1px solid #cfd1d8"
                      borderColor="#cfd1d8"
                      color="black"
                      required
                    />
                    {errors.bankIFSC && <FormErrorMessage>{errors.bankIFSC}</FormErrorMessage>}
                  </FormControl>
                  <FormControl isInvalid={!!errors.bankName} mb="4">
                    <FormLabel color="black">Bank Name</FormLabel>
                    <Input
                      name="bankName"
                      value={bankName}
                      onChange={handleChange}
                      placeholder="Enter Bank Name"
                      border="1px solid #cfd1d8"
                      borderColor="#cfd1d8"
                      color="black"
                      required
                    />
                    {errors.bankName && <FormErrorMessage>{errors.bankName}</FormErrorMessage>}
                  </FormControl>
                </Grid>

                <Button type="submit" colorScheme="blue" mt="4"
                onClick={()=>handleSubmit}>
                  Save
                </Button>
              </Box>
            </Grid>
          </form>
        </Box>
      </Box>
    </Flex>
  );
}

export default Profile;
