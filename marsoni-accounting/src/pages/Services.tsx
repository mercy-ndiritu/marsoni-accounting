
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ServicesSection from '../components/ServicesSection';
import CTASection from '../components/CTASection';
import { CheckCircle, FileText, Calculator, TrendingUp, Landmark, Users, FolderCode } from 'lucide-react';

const Services = () => {
  const detailedServices = [
    {
      id: "bookkeeping",
      icon: <FileText size={36} className="text-accounting-600" />,
      title: "Bookkeeping Services",
      description: "Comprehensive bookkeeping solutions that keep your financial records accurate, up-to-date, and compliant with regulations.",
      content: (
        <>
          <p className="text-gray-600 mb-6">
            Our bookkeeping services provide the foundation for sound financial management. We maintain accurate records that help you understand your financial position, make informed decisions, and ensure compliance with regulations.
          </p>
          <h4 className="text-xl font-semibold mb-3 text-accounting-800">What We Offer:</h4>
          <ul className="space-y-3 mb-6">
            <li className="flex">
              <CheckCircle size={20} className="text-accounting-500 mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-gray-600"><span className="font-medium">Daily Transaction Recording:</span> Accurate tracking of all financial transactions.</span>
            </li>
            <li className="flex">
              <CheckCircle size={20} className="text-accounting-500 mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-gray-600"><span className="font-medium">Financial Statement Preparation:</span> Regular income statements, balance sheets, and cash flow reports.</span>
            </li>
            <li className="flex">
              <CheckCircle size={20} className="text-accounting-500 mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-gray-600"><span className="font-medium">Accounts Receivable/Payable:</span> Management of invoicing, bill payments, and vendor relationships.</span>
            </li>
            <li className="flex">
              <CheckCircle size={20} className="text-accounting-500 mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-gray-600"><span className="font-medium">Payroll Processing:</span> Complete payroll services including tax filings and direct deposits.</span>
            </li>
            <li className="flex">
              <CheckCircle size={20} className="text-accounting-500 mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-gray-600"><span className="font-medium">Software Integration:</span> Setup and management of accounting software customized to your business.</span>
            </li>
          </ul>
        </>
      )
    },
    {
      id: "records-reconciliation",
      icon: <Calculator size={36} className="text-accounting-600" />,
      title: "Records Reconciliation",
      description: "Thorough reconciliation services to ensure accuracy and consistency in your financial records.",
      content: (
        <>
          <p className="text-gray-600 mb-6">
            Our comprehensive records reconciliation are designed to address your specific needs, whether you're an individual, small business, or large corporation. We combine deep expertise in tax law with a thorough understanding of your financial situation to develop effective tax strategies.
          </p>
          <h4 className="text-xl font-semibold mb-3 text-accounting-800">What We Offer:</h4>
          <ul className="space-y-3 mb-6">
            <li className="flex">
              <CheckCircle size={20} className="text-accounting-500 mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-gray-600"><span className="font-medium">Bank and Credit Card Reconciliation:</span> Align statements with internal records to ensure accuracy.</span>
            </li>
            <li className="flex">
              <CheckCircle size={20} className="text-accounting-500 mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-gray-600"><span className="font-medium">Ledger Review & Balancing:</span> Check and balance general ledger accounts.</span>
            </li>
            <li className="flex">
              <CheckCircle size={20} className="text-accounting-500 mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-gray-600"><span className="font-medium">Discrepancy Resolution:</span> Identify and fix mismatches in financial data.</span>
            </li>
            <li className="flex">
              <CheckCircle size={20} className="text-accounting-500 mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-gray-600"><span className="font-medium">Reconciliation Reports:</span> Provide clear monthly or quarterly summaries.</span>
            </li>
            <li className="flex">
              <CheckCircle size={20} className="text-accounting-500 mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-gray-600"><span className="font-medium">System Integration:</span> Work with platforms like QuickBooks, Busy, or TallyPrime.</span>
            </li>
          </ul>
        </>
      )
    },
    {
      id: "financial-advisory",
      icon: <TrendingUp size={36} className="text-accounting-600" />,
      title: "Financial Advisory",
      description: "Expert financial guidance to help you make informed decisions, optimize operations, and achieve your business goals.",
      content: (
        <>
          <p className="text-gray-600 mb-6">
            Our financial advisory services provide the insights and strategies you need to optimize your financial position and achieve both short and long-term goals. We take a holistic approach that considers your complete financial picture.
          </p>
          <h4 className="text-xl font-semibold mb-3 text-accounting-800">What We Offer:</h4>
          <ul className="space-y-3 mb-6">
            <li className="flex">
              <CheckCircle size={20} className="text-accounting-500 mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-gray-600"><span className="font-medium">Cash Flow Management:</span> Strategies to improve liquidity and cash position.</span>
            </li>
            <li className="flex">
              <CheckCircle size={20} className="text-accounting-500 mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-gray-600"><span className="font-medium">Budget Development:</span> Creation of realistic budgets aligned with business goals.</span>
            </li>
            <li className="flex">
              <CheckCircle size={20} className="text-accounting-500 mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-gray-600"><span className="font-medium">Financial Forecasting:</span> Predictive models to anticipate future financial performance.</span>
            </li>
            <li className="flex">
              <CheckCircle size={20} className="text-accounting-500 mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-gray-600"><span className="font-medium">Investment Analysis:</span> Evaluation of investment opportunities based on risk and return profiles.</span>
            </li>
            <li className="flex">
              <CheckCircle size={20} className="text-accounting-500 mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-gray-600"><span className="font-medium">Financial Risk Assessment:</span> Identification and mitigation strategies for financial risks.</span>
            </li>
          </ul>
        </>
      )
    },
    {
      id: "business-software-solutions",
      icon: <FolderCode size={36} className="text-accounting-600" />,
      title: "Business Software Solutions",
      description: "Custom software solutions designed to streamline your business operations, improve productivity, and support growth through digital innovation.",
      content: (
        <>
          <p className="text-gray-600 mb-6">
          We deliver innovative digital tools to streamline operations and drive growth.
          </p>
          <h4 className="text-xl font-semibold mb-3 text-accounting-800">What We Offer:</h4>
          <ul className="space-y-3 mb-6">
            <li className="flex">
              <CheckCircle size={20} className="text-accounting-500 mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-gray-600"><span className="font-medium">Custom Software Development:</span> Tailored apps to meet your business.</span>
            </li>
            <li className="flex">
              <CheckCircle size={20} className="text-accounting-500 mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-gray-600"><span className="font-medium">Custom Accounting Software:</span> Manage finances with tools tailored to your business.</span>
            </li>
            <li className="flex">
              <CheckCircle size={20} className="text-accounting-500 mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-gray-600"><span className="font-medium">Inventory & POS Systems:</span> Track stock and sales in real time.</span>
            </li>
            <li className="flex">
              <CheckCircle size={20} className="text-accounting-500 mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-gray-600"><span className="font-medium">CRM & ERP Integration:</span> Connect customer and resource management systems.</span>
            </li>
            <li className="flex">
              <CheckCircle size={20} className="text-accounting-500 mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-gray-600"><span className="font-medium">Automation & Reporting Tools:</span> Save time and get instant business insights.</span>
            </li>
          </ul>
        </>
      )
    },
    {
      id: "stock-reconciliation",
      icon: <Calculator size={36} className="text-accounting-600" />,
      title: "Stock Reconciliation",
      description: "Accurate stock reconciliation services to streamline inventory processes, reduce losses, and support informed decision-making.",
      content: (
        <>
          <p className="text-gray-600 mb-6">
          Our stock reconciliation services go beyond basic inventory checks. We help you identify discrepancies, ensure data accuracy, and improve inventory control for better business performance.
          </p>
          <h4 className="text-xl font-semibold mb-3 text-accounting-800">What We Offer:</h4>
          <ul className="space-y-3 mb-6">
            <li className="flex">
              <CheckCircle size={20} className="text-accounting-500 mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-gray-600"><span className="font-medium">Inventory Count Verification:</span> Confirm physical stock matches records.</span>
            </li>
            <li className="flex">
              <CheckCircle size={20} className="text-accounting-500 mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-gray-600"><span className="font-medium">Discrepancy Analysis:</span> Identify and explain inventory mismatches.</span>
            </li>
            <li className="flex">
              <CheckCircle size={20} className="text-accounting-500 mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-gray-600"><span className="font-medium">Stock Adjustment Reports:</span> Track changes made to inventory levels.</span>
            </li>
            <li className="flex">
              <CheckCircle size={20} className="text-accounting-500 mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-gray-600"><span className="font-medium">Inventory Audit Support:</span>  Assist in preparing and validating audit data.</span>
            </li>
            
          </ul>
        </>
      )
    }
  ];

  return (
    <>
      <Navbar />
      <div className="pt-24 pb-16">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-accounting-700 to-accounting-800 text-white py-16">
          <div className="container-section">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
              <p className="text-xl text-accounting-100">
                Comprehensive financial solutions designed to help your business thrive.
              </p>
            </div>
          </div>
        </div>
        
        {/* Approach Section */}
        <div className="container-section">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-accounting-dark">Our Approach</h2>
              <p className="text-gray-600 mb-4">
                At Marsoni Accounting, we believe financial services should be more than transactions – they should be transformative for your business. We take a holistic approach that considers your complete financial picture and unique business context.
              </p>
              <p className="text-gray-600 mb-4">
                Rather than one-size-fits-all solutions, we develop customized strategies tailored to your specific needs and goals. Our team combines deep technical expertise with industry knowledge to deliver practical, effective financial solutions.
              </p>
              <div className="mt-6 flex items-center">
                <Users size={24} className="text-accounting-600 mr-3" />
                <span className="text-lg font-semibold text-accounting-800">Client-centered and relationship-driven</span>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -z-10 top-0 -right-4 w-72 h-72 bg-accounting-300 rounded-full opacity-20 blur-xl"></div>
              <img 
                src="https://source.unsplash.com/random/600x400/?meeting,consultation" 
                alt="Client consultation" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
        
        {/* Services Overview */}
        <div className="py-16">
          <ServicesSection />
        </div>
        
        {/* Detailed Service Descriptions */}
        <div className="bg-gray-50 py-16">
          <div className="container-section">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-accounting-dark">Detailed Service Information</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Learn more about our comprehensive service offerings and how they can benefit your business.
              </p>
            </div>
            
            <div className="space-y-16">
              {detailedServices.map((service) => (
                <div key={service.id} id={service.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="p-8">
                    <div className="flex flex-col md:flex-row md:items-center mb-6">
                      <div className="mb-4 md:mb-0 md:mr-6">
                        {service.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-accounting-800">{service.title}</h3>
                        <p className="text-gray-600 mt-1">{service.description}</p>
                      </div>
                    </div>
                    <div>
                      {service.content}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Industries Served */}
        <div className="container-section">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-accounting-dark">Industries We Serve</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              While our services are valuable across all sectors, we have specialized expertise in these industries.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-accounting-500">
              <h3 className="text-xl font-bold mb-3 text-accounting-800">Retail and Trade</h3>
              <p className="text-gray-600 mb-4">
              Tailored support for retail operations, including inventory tracking, point-of-sale integration, and sales tax compliance.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-accounting-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-gray-600">Retail Operations Consulting</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-accounting-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-gray-600">Sales & Tax Strategy</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-accounting-500">
              <h3 className="text-xl font-bold mb-3 text-accounting-800">Distribution</h3>
              <p className="text-gray-600 mb-4">
              Streamlined support for logistics, inventory flow, and order fulfillment across supply chains..
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-accounting-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-gray-600">Supply Chain Analysis & Optimization</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-accounting-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-gray-600">Operational Efficiency Consulting</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-accounting-500">
              <h3 className="text-xl font-bold mb-3 text-accounting-800">Hardware</h3>
              <p className="text-gray-600 mb-4">
              Tailored support for hardware companies, focusing on inventory management, product sourcing, and customer service.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-accounting-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-gray-600">Product Sourcing & Supplier Management</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-accounting-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-gray-600">Operational Efficiency Consulting</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-accounting-500">
              <h3 className="text-xl font-bold mb-3 text-accounting-800">Manufacturing</h3>
              <p className="text-gray-600 mb-4">
                Specialized accounting for inventory management, production costs, and supply chain finances.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-accounting-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-gray-600">Cost Accounting Systems</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-accounting-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-gray-600">Inventory Valuation</span>
                </li>
              </ul>
            </div>
            
            
            
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-accounting-500">
              <h3 className="text-xl font-bold mb-3 text-accounting-800">Retail & E-commerce</h3>
              <p className="text-gray-600 mb-4">
                Financial management for both brick-and-mortar and online retail businesses.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-accounting-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-gray-600">Sales Tax Compliance</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-accounting-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-gray-600">Inventory Management Systems</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <CTASection />
      <Footer />
    </>
  );
};

export default Services;
