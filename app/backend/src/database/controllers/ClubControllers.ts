import { Request, Response } from 'express';
import * as ClubServices from '../services/ClubServices';

export const removeLint = '';

export const getTeams = async (_req: Request, res: Response) => {
  const { status, message, data } = await ClubServices.getTeams();
  if (status >= 400) {
    return res.status(status).json({ message });
  }
  return res.status(200).json(data);
};

export const getTeamById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const convertIdToNumber = Number(id);
  const { status, message, data } = await ClubServices.getTeamById(convertIdToNumber);
  if (status >= 400) {
    return res.status(status).json({ message });
  }
  return res.status(200).json(data);
};
