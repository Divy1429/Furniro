import React from 'react'

const SofaComparisonTable = () => {
  // First table - General Details comparison
  const generalDetailsData = [
    { 
      specification: 'Sales Package', 
      product1: '1 Three Seater Sofa', 
      product2: '1 Two Seater Sofa + 1 Single Seater' 
    },
    { 
      specification: 'Model Number', 
      product1: 'ASG-3001', 
      product2: 'ASG-2501' 
    },
    { 
      specification: 'Configuration', 
      product1: 'Three Seater', 
      product2: 'Two + One Seater' 
    },
    { 
      specification: 'Primary Material', 
      product1: 'Solid Wood', 
      product2: 'Engineered Wood' 
    },
    { 
      specification: 'Upholstery Type', 
      product1: 'Fabric', 
      product2: 'Leather' 
    },
    { 
      specification: 'Origin of Manufacture', 
      product1: 'India', 
      product2: 'India' 
    },
  ];

  // Second table - Product Details
  const productDetailsData = [
    { 
      specification: 'Filling Material', 
      product1: 'Foam', 
      product2: 'Memory Foam + Fiber' 
    },
    { 
      specification: 'Finish Type', 
      product1: 'Matte', 
      product2: 'Semi-Gloss' 
    },
    { 
      specification: 'Maximum Load Capacity', 
      product1: '300 kg', 
      product2: '250 kg' 
    },
    { 
      specification: 'Assembly Required', 
      product1: 'Yes', 
      product2: 'Minimal' 
    },
    { 
      specification: 'Fabric Care', 
      product1: 'Dry Clean Only', 
      product2: 'Machine Washable Covers' 
    },
    { 
      specification: 'Suitable For', 
      product1: 'Living Room', 
      product2: 'Living Room, Office' 
    },
  ];

  // Third table - Dimensions
  const dimensionsData = [
    { 
      specification: 'Width', 
      product1: '190 cm', 
      product2: '160 cm' 
    },
    { 
      specification: 'Weight', 
      product1: '65 kg', 
      product2: '45 kg' 
    },
    { 
      specification: 'Seat Height', 
      product1: '41 cm', 
      product2: '43 cm' 
    },
    { 
      specification: 'Depth', 
      product1: '85 cm', 
      product2: '80 cm' 
    },
    { 
      specification: 'Height', 
      product1: '76 cm', 
      product2: '72 cm' 
    },
    { 
      specification: 'Seat Depth', 
      product1: '55 cm', 
      product2: '52 cm' 
    },
  ];

  // Fourth table - Warranty Details
  const warrantyData = [
    { 
      specification: 'Warranty Summary', 
      product1: '1 Year Manufacturing Warranty for 3 Seater Sofa. Additional 6 months warranty for wooden frame against boring and termite.', 
      product2: '1 Year Comprehensive Warranty on all parts. Extended 1 year warranty available for purchase at additional cost.' 
    },
    { 
      specification: 'Warranty Service Type', 
      product1: 'For warranty-related issues contact the customer care. Service will be provided at your doorstep by the brand technical team.', 
      product2: 'On-site service available. Free pickup and drop service for major repairs. 24/7 customer support available.' 
    },
    { 
      specification: 'Not Covered in Warranty', 
      product1: 'Normal wear and tear, accidental damage, misuse, liquid spills, pet damage, and color fading due to exposure to sunlight.', 
      product2: 'Damage due to mishandling, burns, cuts, pet damage, normal wear and tear, and damages due to natural calamities.' 
    },
    { 
      specification: '', 
      product1: '', 
      product2: '' 
    }, // Empty row for spacing
  ];

  const tableHeadings = [
    'General',
    'Product', 
    'Dimension',
    'Warranty'
  ];

  const allTablesData = [generalDetailsData, productDetailsData, dimensionsData, warrantyData];

  const handleAddToCart = (productNumber) => {
    alert(`Product ${productNumber} added to cart!`);
  };

  return (
    <div className="w-full  max-sm:px-[10px] min-h-screen mt-[32px] sm:mt-[48px] lg:mt-[56px] mdl:mt-[64px] mb-[64px] sm:mb-[80px] lg:mb-[96px] mdl:mb-[112px] bg-white">
      <div className="pl-[16px] sm:pl-[24px] lg:pl-[48px] mdl:pl-[96px] pr-[16px] sm:pr-[24px] lg:pr-[48px] mdl:pr-0">
        
        {/* Top Border - Responsive width */}
        <div 
          className="bg-white"
          style={{
            width: '100%',
            maxWidth: '1332px',
            height: '1px',
            backgroundColor: '#E8E8E8',
            marginBottom: '0px'
          }}
        ></div>

        {/* Responsive Table Container */}
        <div className="bg-white overflow-x-auto">
          <table 
            className="w-full min-w-[800px] mdl:w-auto"
            style={{ 
              borderCollapse: 'separate', 
              borderSpacing: '16px 0',
              borderRight: '1px solid #E8E8E8',
              width: window.innerWidth >= 1440 ? '1100px' : '100%'
            }}
          >
            <tbody>
              {allTablesData.map((tableData, tableIndex) => (
                <React.Fragment key={tableIndex}>
                  {/* Table Heading Row */}
                  <tr>
                    <td 
                      className="text-[20px] sm:text-[24px] lg:text-[26px] mdl:text-[28px] font-medium text-gray-900 bg-white text-start"
                      style={{ 
                        borderRight: '1px solid #E8E8E8',
                        width: window.innerWidth >= 1440 ? '344px' : '200px',
                        minWidth: window.innerWidth >= 1440 ? '344px' : '200px',
                        maxWidth: window.innerWidth >= 1440 ? '344px' : '250px',
                        paddingTop: tableIndex === 0 ? '24px' : '48px',
                        paddingBottom: '8px',
                        paddingLeft: '12px',
                        paddingRight: '12px'
                      }}
                    >
                      <div style={{ textAlign: 'left' }}>
                        {tableHeadings[tableIndex]}
                      </div>
                    </td>
                    <td 
                      className="bg-white text-start"
                      style={{ 
                        borderRight: '1px solid #E8E8E8',
                        width: window.innerWidth >= 1440 ? '344px' : '250px',
                        minWidth: window.innerWidth >= 1440 ? '344px' : '250px',
                        maxWidth: window.innerWidth >= 1440 ? '344px' : '300px',
                        paddingTop: tableIndex === 0 ? '24px' : '48px',
                        paddingBottom: '8px',
                        paddingLeft: '12px',
                        paddingRight: '12px'
                      }}
                    >
                      {/* Empty cell */}
                    </td>
                    <td 
                      className="bg-white text-start"
                      style={{ 
                        width: window.innerWidth >= 1440 ? '344px' : '250px',
                        minWidth: window.innerWidth >= 1440 ? '344px' : '250px',
                        maxWidth: window.innerWidth >= 1440 ? '344px' : '300px',
                        paddingTop: tableIndex === 0 ? '24px' : '48px',
                        paddingBottom: '8px',
                        paddingLeft: '12px',
                        paddingRight: '12px'
                      }}
                    >
                      {/* Empty cell */}
                    </td>
                  </tr>
                  
                  {/* Table Data Rows */}
                  {tableData.map((item, rowIndex) => (
                    <tr key={`${tableIndex}-${rowIndex}`}>
                      <td 
                        className="text-[16px] sm:text-[18px] lg:text-[19px] mdl:text-[20px] font-normal bg-white text-start"
                        style={{ 
                          borderRight: '1px solid #E8E8E8',
                          width: window.innerWidth >= 1440 ? '344px' : '200px',
                          minWidth: window.innerWidth >= 1440 ? '344px' : '200px',
                          maxWidth: window.innerWidth >= 1440 ? '344px' : '250px',
                          verticalAlign: 'top',
                          paddingTop: '8px',
                          paddingBottom: '8px',
                          paddingLeft: '12px',
                          paddingRight: '12px',
                          color: '#000000',
                          textAlign: 'left'
                        }}
                      >
                        <div style={{ wordWrap: 'break-word', textAlign: 'left' }}>
                          {item.specification}
                        </div>
                      </td>
                      <td 
                        className="text-[16px] sm:text-[18px] lg:text-[19px] mdl:text-[20px] font-normal bg-white text-start"
                        style={{ 
                          borderRight: '1px solid #E8E8E8',
                          width: window.innerWidth >= 1440 ? '344px' : '250px',
                          minWidth: window.innerWidth >= 1440 ? '344px' : '250px',
                          maxWidth: window.innerWidth >= 1440 ? '344px' : '300px',
                          verticalAlign: 'top',
                          lineHeight: '1.5',
                          paddingTop: '8px',
                          paddingBottom: '8px',
                          paddingLeft: '12px',
                          paddingRight: '12px',
                          color: '#000000',
                          textAlign: 'left'
                        }}
                      >
                        <div style={{ wordWrap: 'break-word', textAlign: 'left' }}>
                          {item.product1}
                        </div>
                      </td>
                      <td 
                        className="text-[16px] sm:text-[18px] lg:text-[19px] mdl:text-[20px] font-normal bg-white text-start"
                        style={{
                          width: window.innerWidth >= 1440 ? '344px' : '250px',
                          minWidth: window.innerWidth >= 1440 ? '344px' : '250px',
                          maxWidth: window.innerWidth >= 1440 ? '344px' : '300px',
                          verticalAlign: 'top',
                          lineHeight: '1.5',
                          paddingTop: '8px',
                          paddingBottom: '8px',
                          paddingLeft: '12px',
                          paddingRight: '12px',
                          color: '#000000',
                          textAlign: 'left'
                        }}
                      >
                        <div style={{ wordWrap: 'break-word', textAlign: 'left' }}>
                          {item.product2}
                        </div>
                      </td>
                    </tr>
                  ))}
                </React.Fragment>
              ))}
              
              {/* Add to Cart Buttons Row */}
              <tr>
                <td 
                  className="text-sm font-bold text-gray-900 bg-white"
                  style={{ 
                    borderRight: '1px solid #E8E8E8',
                    width: window.innerWidth >= 1440 ? '344px' : '200px',
                    minWidth: window.innerWidth >= 1440 ? '344px' : '200px',
                    maxWidth: window.innerWidth >= 1440 ? '344px' : '250px',
                    paddingTop: '32px',
                    paddingBottom: '16px',
                    paddingLeft: '12px',
                    paddingRight: '12px'
                  }}
                >
                  {/* Empty cell */}
                </td>
                <td 
                  className="bg-white"
                  style={{ 
                    borderRight: '1px solid #E8E8E8',
                    width: window.innerWidth >= 1440 ? '344px' : '250px',
                    minWidth: window.innerWidth >= 1440 ? '344px' : '250px',
                    maxWidth: window.innerWidth >= 1440 ? '344px' : '300px',
                    textAlign: 'left',
                    paddingTop: '32px',
                    paddingBottom: '16px',
                    paddingLeft: '12px',
                    paddingRight: '12px'
                  }}
                >
                  <button 
                    onClick={() => handleAddToCart(1)}
                    className="bg-[#B88E2F] w-full sm:max-w-[180px] lg:max-w-[200px] mdl:max-w-[215px] flex py-[12px] sm:py-[14px] lg:py-[16px] mdl:py-[17px] px-[24px] sm:px-[32px] lg:px-[40px] mdl:px-[48px] justify-center items-center max-h-[48px] sm:max-h-[56px] lg:max-h-[60px] mdl:max-h-[64px] text-white hover:bg-[#A07A2A] transition-colors duration-200 text-[16px] sm:text-[18px] lg:text-[19px] mdl:text-[20px] font-normal cursor-pointer"
                  >
                    Add To Cart
                  </button>
                </td>
                <td 
                  className="bg-white"
                  style={{
                    width: window.innerWidth >= 1440 ? '344px' : '250px',
                    minWidth: window.innerWidth >= 1440 ? '344px' : '250px',
                    maxWidth: window.innerWidth >= 1440 ? '344px' : '300px',
                    textAlign: 'left',
                    paddingTop: '32px',
                    paddingBottom: '16px',
                    paddingLeft: '12px',
                    paddingRight: '12px'
                  }}
                >
                  <button 
                    onClick={() => handleAddToCart(2)}
                    className="bg-[#B88E2F] w-full sm:max-w-[180px] lg:max-w-[200px] mdl:max-w-[215px] flex py-[12px] sm:py-[14px] lg:py-[16px] mdl:py-[17px] px-[24px] sm:px-[32px] lg:px-[40px] mdl:px-[48px] justify-center items-center max-h-[48px] sm:max-h-[56px] lg:max-h-[60px] mdl:max-h-[64px] text-white hover:bg-[#A07A2A] transition-colors duration-200 text-[16px] sm:text-[18px] lg:text-[19px] mdl:text-[20px] font-normal cursor-pointer"
                  >
                    Add To Cart
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default SofaComparisonTable
