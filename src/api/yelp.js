import axios from 'axios';
export default axios.create({
    baseURL:'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization: 'Bearer _mNcLNlOwQQUpdEHUL_1kTtB_R-MFoHw4MtLopUBPQlPwfmjxOFEe6QZ5OhKXTO1SFtoqe6jVx50Z8wi71LswCgDDBiJ8LxBLJHJMLity0Hy2c_64remEM16Yn2aXXYx',
    }
});
