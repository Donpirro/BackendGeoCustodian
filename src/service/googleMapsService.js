const { Client } = require("@googlemaps/google-maps-services-js");

const geocodeAddress = async (address) => {
  try {
    const client = new Client();
    const response = await client.geocode({
      params: {
        address: address,
        key: 'AIzaSyC_tO9nbpH2jp0LOF3aWX29QOGVhoGcjeY', 
      },
    });

    return response.data.results[0].geometry.location;
  } catch (error) {
    console.error('Error al obtener las coordenadas:', error);
    throw new Error('Error al obtener las coordenadas:', error);
  }
};

module.exports = { geocodeAddress };
