import { Request, Response } from 'express';
import { StudentServices } from './student.service';

const createStudent = async (req: Request, res: Response) => {
  try {
    /* sending response is work of controller */
    /*   as we are creating a data by users input, so this time the controller will bring
    data from users request body
 */

    const { student: studentData } = req.body;
    //   after getting data from req controller will send the data to the service.

    //   below we are reciving the result of the data after sending services
    const result = await StudentServices.createStudentIntoDB(studentData);
    /* formation of sending a uniform response */
    res.status(200).json({
      success: true,
      message: 'Student is created successfully',
      data: result,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: 'Error happend!',
      data: err,
    });
    console.log(err);
  }
};

const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await StudentServices.getAllStudentsFromDB();
    res.status(200).json({
      success: true,
      message: 'Students found successfully',
      data: result,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: 'Error happend!',
      data: err,
    });
    console.log(err);
  }
};
const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;
    const result = await StudentServices.getSingleStudentFromDB(studentId);
    res.status(200).json({
      success: true,
      message: 'Student found successfully',
      data: result,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: 'Error happend!',
      data: err,
    });
    console.log(err);
  }
};

export const StudentControllers = {
  createStudent,
  getAllStudents,
  getSingleStudent,
};
