import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "../index.css"
//import NavDropdown from 'react-bootstrap/NavDropdown';

function BasicExample() {
  return (
   
      <div className=" mw-100  bg-bluey border-b-2 container fixed top-0 z-50 p-3">
      <a href="#home" className=" fw-bolder text-white navbar-brand ">
      <span className="fam text-4xl pl-4 text-center font-bold bg-gradient-to-r from-purple-300 via-pink-200 to-blue-300 hover:from-purple-400 hover:via-pink-300 hover:to-blue-400   bg-clip-text text-transparent m-0 fs-2">VisualFlow</span>
      </a><button aria-controls="basic-navbar-nav" type="button" aria-label="Toggle navigation" className="navbar-toggler collapsed">
      <span class="navbar-toggler-icon"></span>
      </button>
      <div className="navbar-collapse collapse" id="basic-navbar-nav">
      <div className="p-2 m-1 mt-0  fs-4 navbar-nav">
      <a href="#home" data-rr-ui-event-key="#home" className="m-0 text-white nav-link">Home</a>
      <a href="#code" data-rr-ui-event-key="#code" className="m-0 text-white nav-link">Code</a>
      </div>
      </div>
      </div>
  

   );
}

export default BasicExample;

    
{/* <nav class="bg-bluey dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="https://flowbite.com/" class="flex items-center"> 
        /* <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 mr-3" alt="Flowbite Logo" />
        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">VisualFlow</span>
    </a> */}
    {/* <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <a href="#" class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</a>
        </li>
        <li>
          <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
        </li>
        <li>
          <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</a>
        </li>
        <li>
          <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Pricing</a>
        </li>
        <li>
          <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav> */}






     // <Navbar expand="lg" fixed="top" className='mt-0' >
      {/* <Container className=' mw-100  bg-bluey border-b-2 '> */}
        {/* <Navbar.Brand href="#home" className=' fw-bolder text-white' ><span class ="fam text-4xl pl-4 text-center font-bold bg-gradient-to-r from-purple-300 via-pink-300 to-blue-300 bg-clip-text text-transparent m-0 fs-2">VisualFlow</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="p-2 m-1 mt-0  fs-4">
            <Nav.Link href="#home" className='m-0 text-white'>Home</Nav.Link>
            <Nav.Link href="#code" className='m-0 text-white'>Code</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      {/* </Container> */}
//    </Navbar> */}