const properties = [
    {
      title: "Luxury Apartment in New York",
      location: "New York, USA",
      price: "$2,500,000",
      image: "luxury.jpg",
      ownerName: "John Smith",
      contactNumber: "+1 555-123-4567",
      emailId: "john.smith23@gmail.com"
    },
    
        {
          title: "Modern House in Los Angeles",
          location: "Los Angeles, USA",
          price: "$1,800,000",
          image: "Modern.jpeg",
          ownerName: "Sarah Johnson",
          contactNumber: "+1 555-234-5678",
          emailId: "sarah.johnson@gmail.com",
        },
        {
          title: "Beachfront Villa in Miami",
          location: "Miami, USA",
          price: "$3,200,000",
          image: "BeachFront.jpeg",
          ownerName: "Michael Brown",
          contactNumber: "+1 555-345-6789",
          emailId: "michael.brown@gmail.com",
        },
        {
          title: "Cozy Cottage in Texas",
          location: "Texas, USA",
          price: "$600,000",
          image: "cottage.jpeg",
          ownerName: "Emily Davis",
          contactNumber: "+1 555-456-7890",
          emailId: "emily.davis@gmail.com",
        },
        {
          title: "Mountain Retreat in Colorado",
          location: "Colorado, USA",
          price: "$750,000",
          image: "mountain.jpeg",
          ownerName: "Daniel Wilson",
          contactNumber: "+1 555-567-8901",
          emailId: "daniel.wilson@gmail.com",
        },
        {
          title: "Urban Loft in Chicago",
          location: "Chicago, USA",
          price: "$1,200,000",
          image: "urban.jpeg",
          ownerName: "Jessica Smith",
          contactNumber: "+1 555-678-9012",
          emailId: "jessica.smith@gmail.com",
        },
        {
          title: "Elegant Villa in Barcelona",
          location: "Barcelona, Spain",
          price: "€2,000,000",
          image: "barcelona.jpeg",
          ownerName: "Carlos Garcia",
          contactNumber: "+34 612-345-678",
          emailId: "carlos.garcia@gmail.com",
        },
        {
          title: "Countryside Home in Tuscany",
          location: "Tuscany, Italy",
          price: "€850,000",
          image: "countryside.jpeg",
          ownerName: "Luisa Rossi",
          contactNumber: "+39 321-456-789",
          emailId: "luisa.rossi@gmail.com",
        },
        {
          title: "Penthouse in Dubai",
          location: "Dubai, UAE",
          price: "AED 5,000,000",
          image: "penthouse.jpeg",
          ownerName: "Ahmed Al-Farsi",
          contactNumber: "+971 50-123-4567",
          emailId: "ahmed.alfarsi@gmail.com",
        },
        {
          title: "Beach Bungalow in Maldives",
          location: "Maldives",
          price: "$1,500,000",
          image: "maldives.jpeg",
          ownerName: "Aisha Mohammed",
          contactNumber: "+960 987-6543",
          emailId: "aisha.mohammed@gmail.com",
        },
        {
          title: "Lakefront Villa in Switzerland",
          location: "Geneva, Switzerland",
          price: "CHF 3,500,000",
          image: "lakefront.jpeg",
          ownerName: "Hans Meier",
          contactNumber: "+41 22-345-6789",
          emailId: "hans.meier@gmail.com",
        },
        {
          title: "Modern Duplex in Tokyo",
          location: "Tokyo, Japan",
          price: "¥150,000,000",
          image: "duplex.jpeg",
          ownerName: "Hiroshi Tanaka",
          contactNumber: "+81 90-1234-5678",
          emailId: "hiroshi.tanaka@gmail.com",
        },
        {
          title: "Historic Estate in Paris",
          location: "Paris, France",
          price: "€3,800,000",
          image: "historic.jpeg",
          ownerName: "Claire Dupont",
          contactNumber: "+33 6-7890-1234",
          emailId: "claire.dupont@gmail.com",
        },
        {
          title: "Desert Villa in Arizona",
          location: "Arizona, USA",
          price: "$900,000",
          image: "desert.jpeg",
          ownerName: "Robert Miller",
          contactNumber: "+1 555-789-0123",
          emailId: "robert.miller@gmail.com",
        },
        {
          title: "Hilltop Mansion in Beverly Hills",
          location: "Beverly Hills, USA",
          price: "$8,500,000",
          image: "hill.jpeg",
          ownerName: "Victoria Brown",
          contactNumber: "+1 555-890-1234",
          emailId: "victoria.brown@gmail.com",
        },
        {
          title: "Farmhouse in the English Countryside",
          location: "Surrey, England",
          price: "£1,300,000",
          image: "farmhouse.jpeg",
          ownerName: "William Evans",
          contactNumber: "+44 7911-123456",
          emailId: "william.evans@gmail.com",
        },
        {
          title: "Oceanview Condo in Sydney",
          location: "Sydney, Australia",
          price: "AUD 2,750,000",
          image: "ocean.jpeg",
          ownerName: "Sophie Taylor",
          contactNumber: "+61 412-345-678",
          emailId: "sophie.taylor@gmail.com",
        },
        {
          title: "Jungle Retreat in Bali",
          location: "Bali, Indonesia",
          price: "$450,000",
          image: "jungle.jpeg",
          ownerName: "Dewi Rahmawati",
          contactNumber: "+62 812-3456-7890",
          emailId: "dewi.rahmawati@gmail.com",
        },
        {
          title: "Riverside Apartment in Amsterdam",
          location: "Amsterdam, Netherlands",
          price: "€1,250,000",
          image: "riverside.jpeg",
          ownerName: "Jan de Vries",
          contactNumber: "+31 20-123-4567",
          emailId: "jan.devries@gmail.com",
        },
        {
          title: "Ski Chalet in Aspen",
          location: "Aspen, USA",
          price: "$4,000,000",
          image: "aspen.jpeg",
          ownerName: "Logan White",
          contactNumber: "+1 555-678-1234",
          emailId: "logan.white@gmail.com",
        },
      ];
  
  function loadProperties() {
    const propertyList = document.querySelector(".property-list");
    propertyList.innerHTML = "";
  
    properties.forEach((property, index) => {
      const card = `
        <div class="property-card">
          <img src="${property.image}" alt="${property.title}">
          <div class="property-details">
            <h2 class="property-title">${property.title}</h2>
            <p class="property-location">${property.location}</p>
            <p class="property-price">${property.price}</p>
            <div class="property-contact">
              <button onclick="contactAgent(${index})">Contact Agent</button>
            </div>
          </div>
        </div>
      `;
      propertyList.innerHTML += card;
    });
  }
  
  function contactAgent(index) {
    const property = properties[index];
    alert(
      `Owner: ${property.ownerName}\nContact Number: ${property.contactNumber}\nemailId:${property.emailId}`
    );
  }
  
  window.onload = loadProperties;
  