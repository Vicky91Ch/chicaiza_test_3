import { Paper, Typography } from "@mui/material";

export default function HomePage() {
  return (
    <Paper sx={{ p: 3, borderRadius: 3 }}>
      <Typography variant="h2" fontWeight={900} gutterBottom>
        Bienvenido a la Gestión de Categorías
      </Typography>

      <Typography color="text.secondary">
        Sistema para listar, crear categorías y realizar cálculos geométricos y de IVA.
      </Typography>
    </Paper>


  );
}