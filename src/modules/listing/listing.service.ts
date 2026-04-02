import * as listingRepo from "./listing.repository.js";

export const create = async (data: any) => {
  // business logic here
  return listingRepo.create(data);
};

export const getAll = async () => {
    return listingRepo.findAll();
};
