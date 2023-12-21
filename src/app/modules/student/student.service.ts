/* Service fuction will handle all the business logic! like create collection 
into database */
import { Student } from './student.interface';
import StudentModel from './studnet.schema.model';

/* Here we are doing a mongodb query that is why we are using model. we will do 
mongodb queries on model */
const createStudentIntoDB = async (student: Student) => {
  const result = await StudentModel.create(student);
  return result;
};

const getAllStudentsFromDB = async () => {
  const result = await StudentModel.find();
  return result;
};

const getSingleStudentFromDB = async (id: string) => {
  const result = await StudentModel.findOne({ id });
  return result;
};

export const StudentServices = {
  createStudentIntoDB,
  getAllStudentsFromDB,
  getSingleStudentFromDB,
};
