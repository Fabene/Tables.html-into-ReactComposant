
import './App.css';
import NavbarBrand from './components/NavbarBrand';
import SidebarToogle from './components/SidebarToogle';
import NavbarSearch from './components/NavbarSearch';
import FooterBase from './components/FooterBase';
import Dashboard from './components/DashBoard';
import Core from './components/Core';
import Interface from './components/Interface';
import NavBar from './components/NavBar';
import NavLinkCollapsed from './components/NavLinkCollapsed';
import SbSidenav from './components/SbSidenav';
import Pages from './components/Pages';
import Authentication from './components/Authentification';
import NestedNav from './components/NestedNav';
import SideNavCollapsed from './components/SideNavCollapsed';
import Error from './components/Error';
import Addons from './components/Addons';
import Charts from './components/Chart';
import Tables from './components/Tables';
import SmallLogin from './components/SmallLogin';
import Starter2 from './components/Starter2';
import Starter1 from './components/Starter1';
import Link from './components/Link';
import DatableExample from './components/DatableExample';
import Product from './components/Product';
import ProductInfo from './components/ProductInfo';

function App() {
  return (
    <body class="sb-nav-fixed">
    <nav class="sb-topnav navbar navbar-expand navbar-dark bg-dark">
       
        <NavbarBrand/>
        <SidebarToogle/>
        <NavbarSearch/>
    
        <NavBar/>
        
    </nav>
    <div id="layoutSidenav">
        <div id="layoutSidenav_nav">
            <nav class="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                <div class="sb-sidenav-menu">
                    <div class="nav">
                        <Core/>
                        <Dashboard/>
                        <Interface/>
                        <NavLinkCollapsed/>
                        <div class="collapse" id="collapseLayouts" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                           <SbSidenav/>
                        </div>
                        <Pages/>
                        <div class="collapse" id="collapsePages" aria-labelledby="headingTwo" data-bs-parent="#sidenavAccordion">
                            <nav class="sb-sidenav-menu-nested nav accordion" id="sidenavAccordionPages">
                                <Authentication/>
                                <div class="collapse" id="pagesCollapseAuth" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordionPages">
                                    <NestedNav/>
                                </div>
                                <SideNavCollapsed/>
                                <div class="collapse" id="pagesCollapseError" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordionPages">
                                    <Error/>
                                </div>
                            </nav>
                        </div>
                        <Addons/>
                        <Charts/>
                        <Tables/>
                    </div>
                </div>
                <SmallLogin/>
            </nav>
        </div>
        <div id="layoutSidenav_content">
            <main>
                <div class="container-fluid px-4">
                    <Starter1/>
                    <Starter2/>
                    <div class="card mb-4">
                    <Link/>
                    </div>
                    <div class="card mb-4">
                        <DatableExample/>
                        <div class="card-body">
                           <table id='datablesSimple'>
                            <thead>
                                <Product 
                                name='Name' 
                                position='Position' 
                                office='Office' 
                                age='Age' 
                                startdate='Start date' 
                                salary='Salary'
                                />
                            </thead>
                            <tfoot>
                            <Product 
                                name='Name' 
                                position='Position' 
                                office='Office' 
                                age='Age' 
                                startdate='Start date' 
                                salary='Salary'
                                />  
                            </tfoot>
                            <tbody>
                                <ProductInfo
                                name='Tiger Nixon' 
                                position='System Architect' 
                                office='Edinburgh' 
                                age='61' 
                                startdate='2011/04/25' 
                                salary='$320,800'
                                />

                                <ProductInfo
                                name='Garrett Winters' 
                                position='Accountant' 
                                office='Tokyo' 
                                age='63' 
                                startdate='2011/07/25' 
                                salary='$170,750'
                                />
                                 <ProductInfo
                                name='Ashton Cox' 
                                position='Junior Technical Author' 
                                office='San Francisco' 
                                age='66' 
                                startdate='2009/01/12' 
                                salary='$86,000'
                                />
                                 <ProductInfo
                                name='Cedric Kelly' 
                                position='Senior Javascript Developer' 
                                office='Edinburgh' 
                                age='22' 
                                startdate='2012/03/29' 
                                salary='$433,060'
                                />
                                <ProductInfo
                                name='Airi Satou' 
                                position='Accountant' 
                                office='Tokyo' 
                                age='33' 
                                startdate='2008/11/28' 
                                salary='$162,700'
                                />
                                <ProductInfo
                                name='Brielle Williamsom' 
                                position='Integration Specialist' 
                                office='New York' 
                                age='61' 
                                startdate='2012/12/02' 
                                salary='$372,000'
                                />
                                <ProductInfo
                                name='Herrod Chandler' 
                                position=' Sales Assistant' 
                                office='San Francisco ' 
                                age='59' 
                                startdate='2012/08/06' 
                                salary='$137,500'
                                />
                                <ProductInfo
                                name='Rhona Davidson' 
                                position='Integration Specialist' 
                                office='Tokyo ' 
                                age='55' 
                                startdate='2010/10/14' 
                                salary='$327,900'
                                />
                                <ProductInfo
                                name='Colleen Hurst' 
                                position='Javascript Developer' 
                                office='San Francisco ' 
                                age='39' 
                                startdate='2009/09/15' 
                                salary='$205,500'
                                />
                                <ProductInfo
                                name='Sonya Frost' 
                                position='Software Engineer' 
                                office='Edinburgh ' 
                                age='23' 
                                startdate='2008/12/13' 
                                salary='$103,600'
                                />
                                <ProductInfo
                                name='Jena Gaines' 
                                position=' Office Manager' 
                                office=' London ' 
                                age='30' 
                                startdate='2008/12/19' 
                                salary='$90,560'
                                />
                                <ProductInfo
                                name='Quinn Flynn' 
                                position='Support Lead' 
                                office='Edinburgh ' 
                                age='22' 
                                startdate='2013/03/03' 
                                salary='$342,000'
                                />
                                <ProductInfo
                                name='Charde Marshall' 
                                position='Regional Director' 
                                office='San Francisco ' 
                                age='26' 
                                startdate='2008/10/16' 
                                salary='$470,600'
                                />
                                <ProductInfo
                                name='Haley Kennedy' 
                                position='Senior Marketting Designer' 
                                office='London ' 
                                age='43' 
                                startdate='2012/12/18' 
                                salary='$313,500'
                                />
                                <ProductInfo
                                name='Tatyana Fitzpatrick' 
                                position='Regional Director' 
                                office='London ' 
                                age='19' 
                                startdate='2010/03/17' 
                                salary='$385,750'
                                />
                                <ProductInfo
                                name='Michael Silva' 
                                position='Marketing Designer' 
                                office=' London ' 
                                age='66' 
                                startdate='2012/11/27' 
                                salary='$198,500'
                                />
                                <ProductInfo
                                name='Paul Byrd' 
                                position='Chief Financial Officer (CFO)' 
                                office='New York ' 
                                age='64' 
                                startdate='2010/06/09' 
                                salary='$725,000'
                                />
                                <ProductInfo
                                name='Gloria Little' 
                                position='Systems Administrator '
                                office='New York ' 
                                age='59' 
                                startdate='2009/04/10' 
                                salary='$237,000'
                                />
                                <ProductInfo
                                name='Bradley Greer' 
                                position='Software Engineer' 
                                office='London ' 
                                age='41' 
                                startdate='2012/10/13' 
                                salary='$132,000'
                                />
                                <ProductInfo
                                name='Dai Rios' 
                                position='Personnel Lead' 
                                office=' Edinburgh ' 
                                age='35' 
                                startdate='2012/09/26' 
                                salary='$217,500'
                                />
                                <ProductInfo
                                name='Jenette Caldwell ' 
                                position=' Development Lead ' 
                                office='New York ' 
                                age='30' 
                                startdate='2011/09/03' 
                                salary='$345,000'
                                />
                                <ProductInfo
                                name='Yuri Berry' 
                                position='Chief Marketing Officer (CMO)' 
                                office='New York ' 
                                age='40' 
                                startdate='2009/06/25' 
                                salary='$675,000'
                                />
                                <ProductInfo
                                name='Caesar Vance' 
                                position='Pre-Sales Support '
                                office='New York ' 
                                age='21' 
                                startdate='2011/12/12' 
                                salary='$106,450'
                                />
                                <ProductInfo
                                name='Doris Wilder' 
                                position='Sales Assistant' 
                                office='Sidney ' 
                                age='23' 
                                startdate='2010/09/20' 
                                salary='$85,600'
                                />
                                <ProductInfo
                                name='Angelica Ramos' 
                                position='Chief Executive Officer (CEO)' 
                                office=' London ' 
                                age='47' 
                                startdate='2009/10/09' 
                                salary='$1,200,000'
                                />
                                <ProductInfo
                                name='Gavin Joyce' 
                                position=' Developer' 
                                office='Edinburgh  ' 
                                age='42' 
                                startdate='2010/12/22' 
                                salary='$92,575'
                                />
                                 <ProductInfo
                                name='Jennifer Chang' 
                                position='Regional Director '
                                office=' Singapore ' 
                                age='28' 
                                startdate='2010/11/14' 
                                salary='$375,650'
                                />
                                <ProductInfo
                                name='Brenden Wagner' 
                                position='Software Engineer' 
                                office='San Francisco ' 
                                age='28' 
                                startdate='2011/06/07' 
                                salary='$206,850'
                                />
                                <ProductInfo
                                name='Fiona Green' 
                                position='Chief Operating Officer (C0O)' 
                                office=' San Francisco ' 
                                age='48' 
                                startdate='2010/03/11' 
                                salary='$850,000'
                                />
                                <ProductInfo
                                name='Shou Itou' 
                                position=' Regional Marketing' 
                                office='Tokyo  ' 
                                age='20' 
                                startdate='2011/08/14' 
                                salary='$163,000'
                                />
                                <ProductInfo
                                name='Michelle House' 
                                position='Integration Specialist '
                                office=' Sidney ' 
                                age='37' 
                                startdate='2011/06/02' 
                                salary='$95,400'
                                />
                                <ProductInfo
                                name='Suki Burks' 
                                position='Developper ' 
                                office=' London ' 
                                age='53' 
                                startdate='2009/10/22' 
                                salary='$114,500'
                                />
                                <ProductInfo
                                name='Prescott Bartlett' 
                                position=' Technical Author' 
                                office=' London  ' 
                                age='27' 
                                startdate='2011/05/07' 
                                salary='$145,000'
                                />
                                <ProductInfo
                                name='Gavin Cortez' 
                                position=' Team Leader' 
                                office='San Francisco  ' 
                                age='22' 
                                startdate='2008/10/26' 
                                salary='$235,500'
                                />
                                <ProductInfo
                                name='Martena Mccray' 
                                position='Post-Sales Support '
                                office=' Edinburgh ' 
                                age='46' 
                                startdate='2011/03/09' 
                                salary='$324,050'
                                />
                                <ProductInfo
                                name='Unity Butler' 
                                position='Marketing Designer ' 
                                office=' San Francisco ' 
                                age='47' 
                                startdate='2009/12/09' 
                                salary='$85,675'
                                />
                                <ProductInfo
                                name='Howard Hatfield' 
                                position=' Office Manager' 
                                office=' San Francisco  ' 
                                age='51' 
                                startdate='2008/12/16' 
                                salary='$164,500'
                                />
                                <ProductInfo
                                name='Hope Fuentes' 
                                position=' Secretary ' 
                                office='San Francisco  ' 
                                age='41' 
                                startdate='2010/02/12' 
                                salary='$109,850'
                                />
                                <ProductInfo
                                name='Vivian Harell' 
                                position='Financial Controller '
                                office=' San Francisco ' 
                                age='62' 
                                startdate='2009/02/14' 
                                salary='$452,500'
                                />
                                <ProductInfo
                                name='Timothy Mooney' 
                                position='Office Manager ' 
                                office=' London ' 
                                age='37' 
                                startdate='2008/12/11' 
                                salary='$136,200'
                                />
                                <ProductInfo
                                name='Jackson Bradshaw' 
                                position=' Director ' 
                                office=' New York  ' 
                                age='65' 
                                startdate='2008/09/26' 
                                salary='$645,750'
                                />
                                <ProductInfo
                                name='Olivia Liang' 
                                position=' Support Engineer ' 
                                office=' Singapore ' 
                                age='64' 
                                startdate='2011/02/03' 
                                salary='$234,500'
                                />
                                <ProductInfo
                                name='Bruno Nash' 
                                position='Software Engineer '
                                office=' London ' 
                                age='38' 
                                startdate='2011/05/03' 
                                salary='$136,500'
                                />
                                <ProductInfo
                                name='Sakura Yamamoto' 
                                position='Support Engineer ' 
                                office=' Tokyo ' 
                                age='37' 
                                startdate='2009/08/19' 
                                salary='$139,575'
                                />
                                <ProductInfo
                                name='Thor Walton' 
                                position='Developer' 
                                office=' New York  ' 
                                age='61' 
                                startdate='2013/08/11' 
                                salary='$98,540'
                                />
                                <ProductInfo
                                name='Finn Camacho' 
                                position=' Support Engineer ' 
                                office='San Francisco  ' 
                                age='47' 
                                startdate='2009/07/07' 
                                salary='$87,500'
                                />
                                <ProductInfo
                                name='Serge Baldwin' 
                                position='Data Coordinator '
                                office=' Singapore ' 
                                age='64' 
                                startdate='2012/04/09' 
                                salary='$138,575'
                                />
                                <ProductInfo
                                name='Zenaida Frank' 
                                position='Software Engineer ' 
                                office=' New York ' 
                                age='63' 
                                startdate='2010/01/04' 
                                salary='$125,250'
                                />
                                <ProductInfo
                                name='Zorida Serrano' 
                                position=' Software Engineer' 
                                office=' San Francisco  ' 
                                age='56' 
                                startdate='2012/06/01' 
                                salary='$115,000'
                                />
                                <ProductInfo
                                name='Jennifer Acosta' 
                                position=' Junior Javascript Developer ' 
                                office='Edinburgh ' 
                                age='46' 
                                startdate='2013/02/01' 
                                salary='$75,650'
                                />
                                <ProductInfo
                                name='Cara Stevens' 
                                position='Sales Assistant '
                                office=' New York ' 
                                age='46' 
                                startdate='2012/12/06' 
                                salary='$145,600'
                                />
                                <ProductInfo
                                name='Hermione Butler' 
                                position='Regional Director ' 
                                office=' London ' 
                                age='47' 
                                startdate='2011/03/21' 
                                salary='$356,250'
                                />
                                <ProductInfo
                                name='Lael Greer' 
                                position=' Systems Administrator' 
                                office=' London ' 
                                age='21' 
                                startdate='2009/02/27' 
                                salary='$103,500'
                                />
                                <ProductInfo
                                name='Jonas Alexander' 
                                position=' Developer ' 
                                office='San Francisco  ' 
                                age='30' 
                                startdate='2010/07/14' 
                                salary='$86,500'
                                />
                                <ProductInfo
                                name='Shad Decker' 
                                position='Regional Director ' 
                                office=' Edinburgh ' 
                                age='51' 
                                startdate='2008/11/13' 
                                salary='$183,000'
                                />
                                <ProductInfo
                                name='Michael Bruce' 
                                position=' Javascript Developer' 
                                office=' Singapore ' 
                                age='29' 
                                startdate='2011/06/27' 
                                salary='$183,000'
                                />
                                <ProductInfo
                                name='Donna Snider' 
                                position=' Customer Support ' 
                                office='New York  ' 
                                age='27' 
                                startdate='2011/01/25' 
                                salary='$112,000'
                                />
                            </tbody>
                           </table>
                        </div>
                    </div>
                </div>
            </main>
            <FooterBase/>
        </div>
    </div>
    
</body>
  );
}

export default App;
