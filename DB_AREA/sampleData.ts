import sequelize from "./database";
import DeliveryAgent from "../deliveryService/src/model/Agent";
import PacketService from "../foodService/src/model/Packet";
import FoodService from "../foodService/src/model/Food";

async function insertSampleData() {
  try {
    const sampleFood = [
      "Chole Bhature",
      "Pizza",
      "Burger",
      "Pasta",
      "Pav Bhaji",
      "Dhokla",
    ];

    // Insert sample data into the User table

    // please ensure that { force: true } only use in development mode not in production mode
    await DeliveryAgent.sync({ force: true });
    await PacketService.sync({ force: true });
    await FoodService.sync({ force: true });
    let commonDataModel = {
      is_reserved: false,
    };

    for (let i = 0; i < 20; i++) {
      await DeliveryAgent.create(commonDataModel);
      await PacketService.create(commonDataModel);
    }
    for (let i = 0; i < sampleFood.length; i++) {
      await FoodService.create({
        name: sampleFood[i],
      });
    }

    console.log("Sample data inserted successfully.");
  } catch (error) {
    console.error("Error inserting sample data:", error);
  } finally {
    // Close the Sequelize connection after the script is done
    await sequelize.close();
    console.log("Connection closed.");
  }
}

insertSampleData();
