import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: 'Bearer kbAKytAKcOslKFBrdl5jz47FuSz-0qY26ANNXb2B-BS6mNhw9cwup2I5zx53Xy0twMiFVpeTKUPPOLIXaoUclyIsE4r8UfObJ7QZvLVu6TEGX1lxdLhFcCgT9YBAXnYx'
  },  
})