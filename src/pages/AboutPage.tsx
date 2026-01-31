import { Paper, Typography } from "@mui/material";

export default function AboutPage() {
  return (
    <Paper sx={{ p: 3, borderRadius: 3 }}>
      <Typography variant="h5" fontWeight={900} gutterBottom>
        Información del Sistema
      </Typography>

      <Typography color="text.secondary">
        Este sistema permite gestionar categorías y realizar cálculos sencillos para practicar migración a ReactJS.
      </Typography>

      <Typography sx={{ mt: 2 }}>
        Fuente: akabab/starwars-api (incluye URLs de imágenes).
      </Typography>
    </Paper>
  );
}