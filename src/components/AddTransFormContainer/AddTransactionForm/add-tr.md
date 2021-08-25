# without authorization

# http://localhost:5000/api/v1/transactions

{ "type": "expense", "categoryId": "6121925660f79a0fd0c6d3f6", "comments": "TEST TR222222222222
without auth" }

# in component

axios.defaults.baseURL = 'https://api.themoviedb.org';

async componentDidMount() { const response = await axios.get(`/3/trending/all/day?api_key=${KEY}`);
this.setState({ moviesPopular: response.data.results }); }
