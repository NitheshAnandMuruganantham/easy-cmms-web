import axios from "../../utils/axios";

export const GetAllMaintenance = async (
  where: any,
  limit: number,
  offset: number,
  orderBy: any
) => {
  return await axios.post("/maintanance/get", {
    where,
    limit,
    offset,
    orderBy,
  });
};
export const GetAllMaintenanceCount = async (
  where: any,
  limit: number,
  offset: number,
  orderBy: any
) => {
  return await axios.post("/maintanance/count", {
    where,
    limit,
    offset,
    orderBy,
  });
};

export const GetMaintenanceById = async (id: string) => {
  return await axios.get(`/maintanance`, {
    params: {
      id,
    },
  });
};

export const CreateMaintenance = async (data: any) => {
  return await axios.post("/maintanance/create", data);
};

export const UpdateMaintenance = async (data: any) => {
  return await axios.put("/maintanance/update", data);
};

export const DeleteMaintenance = async (id: any) => {
  return await axios.delete(`/maintanance/${id}`);
};
