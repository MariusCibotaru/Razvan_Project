import { ReactNode } from 'react';
import PhoneIcon from '@mui/icons-material/Phone';
import ConstructionIcon from '@mui/icons-material/Construction';
import AssignmentIcon from '@mui/icons-material/Assignment';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import DoneIcon from '@mui/icons-material/Done';
import BuildIcon from '@mui/icons-material/Build';

interface WorkingStage {
  title: string;
  description: string;
  icon: ReactNode;
}

export const workingStages: WorkingStage[] = [
  {
    title: 'PLANIFICAM O CONSULTATIE',
    description: 'Planificam o consultatie gratuita despre monumentele funerare, livrare si instalare',
    icon: <PhoneIcon sx={{ fontSize: 100, color: '#82242e' }} />, 
  },
  {
    title: 'ALEGETI MODELUL',
    description: 'Alegeti modelul dorit, se achita un avans, determinam poza pentru monument',
    icon: <AssignmentIcon sx={{ fontSize: 100, color: '#82242e' }} />, 
  },
  {
    title: 'PRODUCEM MONUMENTUL',
    description: 'Dispunem de producere proprie si echipe de profesionisti pentru instalare',
    icon: <ConstructionIcon sx={{ fontSize: 100, color: '#82242e' }} />, 
  },
  {
    title: 'LIVRAM MONUMENTUL',
    description: 'Detinem transport propriu pentru livrarea monumentului la cimitirul necesar',
    icon: <LocalShippingIcon sx={{ fontSize: 100, color: '#82242e' }} />,
  },
  {
    title: 'INSTALARE MONUMENT',
    description: 'Specialistii nostri vor instala si vor face curatenie dupa lucrarile efectuate',
    icon: <DoneIcon sx={{ fontSize: 100, color: '#82242e' }} />,
  },
];
