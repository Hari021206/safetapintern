const Simulation =
require("../models/simulationModel");

const getSimulations =
async (req, res) => {

  try {

    const simulations =
    await Simulation.find();

    res.json(simulations);

  } catch (error) {

    res.status(500).json({

      message:error.message
    });
  }
};

const createSimulation =
async (req, res) => {

  try {

    const {

      title,

      category,

      description

    } = req.body;

    if (
      !title ||
      !category ||
      !description
    ) {

      return res.status(400).json({

        message:
        "All fields required"
      });
    }

    const simulation =
    await Simulation.create({

      title,

      category,

      description
    });

    res.status(201).json(
      simulation
    );

  } catch (error) {

    res.status(500).json({

      message:error.message
    });
  }
};

const updateSimulation = async (

  req,
  res

) => {

  try {

    const updatedSimulation =

    await Simulation.findByIdAndUpdate(

      req.params.id,

      req.body,

      {
        new: true
      }

    );

    if (!updatedSimulation) {

      return res.status(404).json({

        message:
        "Simulation not found"

      });
    }

    res.status(200).json(

      updatedSimulation

    );

  } catch (error) {

    res.status(500).json({

      message:error.message

    });
  }
};

const deleteSimulation =
async (req, res) => {

  try {

    const simulation =
    await Simulation.findById(
      req.params.id
    );

    if (!simulation) {

      return res.status(404).json({

        message:
        "Simulation not found"
      });
    }

    await simulation.deleteOne();

    res.json({

      message:
      "Simulation Deleted Successfully"
    });

  } catch (error) {

    res.status(500).json({

      message:error.message
    });
  }
};

module.exports = {

  getSimulations,

  createSimulation,

  updateSimulation,

  deleteSimulation
};