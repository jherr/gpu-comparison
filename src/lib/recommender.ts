import createKDTree from "static-kdtree";

import { gpus, GPU } from "../gpus";

const gpuPoint = (gpu: GPU): number[] => [
  gpu.g2d,
  gpu.dx9,
  gpu.dx10,
  gpu.dx11,
  gpu.dx12,
  gpu.overallSpeed,
];

const tree = createKDTree(gpus.map((gpu) => gpuPoint(gpu as GPU)));

export const getRecommendations = (gpu: GPU): GPU[] =>
  tree
    .knn(gpuPoint(gpu), 21)
    .map((index) => gpus[index] as GPU)
    .filter((recommendedGPU) => recommendedGPU.id !== gpu.id);
