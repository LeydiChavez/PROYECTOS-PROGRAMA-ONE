# 🛍️ Desafío Alura Store

## 📘 Descripción del proyecto

Este proyecto forma parte del **Primer Desafío del programa ONE - Oracle Next Education**, cuyo objetivo es **ayudar al Sr. Juan a decidir qué tienda de su cadena Alura Store debe vender** para iniciar un nuevo emprendimiento.

El análisis se realizó a partir de los datos de ventas, rendimiento y reseñas de las **cuatro tiendas** de la cadena, con el fin de identificar **cuál presenta menor eficiencia y rentabilidad**.

---

## 🎯 Objetivo

Determinar **qué tienda debería vender el Sr. Juan**, basándose en indicadores clave como:

- Facturación total (ingresos)
- Ventas por categoría de producto
- Calificación promedio de los clientes
- Productos más y menos vendidos
- Costo de envío promedio

---

## 🧩 Estructura del análisis

El proyecto está dividido en las siguientes secciones:

1. **Importación de datos**  
   Carga de los cuatro archivos CSV con la información de ventas de cada tienda.

2. **Análisis de facturación**  
   Cálculo de ingresos totales por tienda para identificar la más y la menos rentable.

3. **Ventas por categoría**  
   Evaluación de la distribución de ventas entre diferentes tipos de productos.

4. **Calificación promedio de la tienda**  
   Promedio de reseñas de clientes para medir la satisfacción general.

5. **Productos más y menos vendidos**  
   Identificación de los productos más exitosos y los de menor rotación.

6. **Costo de envío promedio por tienda**  
   Comparación de los costos logísticos entre tiendas.

7. **Visualizaciones**  
   Se generaron gráficos con Matplotlib para apoyar el análisis:
   - Gráfico de barras: facturación total por tienda  
   - Gráfico circular: distribución de ventas por categoría  
   - Diagrama de dispersión: relación entre precio y costo de envío  
   - Gráfico de líneas: calificación promedio por tienda

8. **Conclusion final**  
   Recomendación final sobre qué tienda debería venderse y por qué.

---

## 📊 Resultados principales

- La **Tienda 1** obtuvo la mayor facturación, posicionándose como la más rentable.  
- Las categorías **Muebles** y **Electrónicos** fueron las más vendidas.  
- Las calificaciones promedio fueron similares entre tiendas (~4/5).  
- La **Tienda 4** presentó el **menor nivel de facturación** y no destacó en las categorías más rentables.  

**Conclusión:**  
> Se recomienda que el Sr. Juan **venda la Tienda 4**, ya que muestra el menor rendimiento financiero.  
> Esta decisión permitiría concentrar los recursos en las tiendas con mejor desempeño y mayor potencial de crecimiento.

---

## 🧠 Tecnologías utilizadas

- **Python** 🐍  
- **Pandas** 📊  
- **Matplotlib** 📈  
- **Google Colab** ☁️

---

## 📂 Estructura del proyecto

```plaintext
challenge1-data-science-latam/
    ├── notebook/
    │   └── AluraStoreLatam.ipynb
    ├── data/
    │   ├── ventas.csv
    │   ├── productos.csv
    │   ├── clientes.csv
    │   └── canales.csv
    └── README.md 

```

---

## 🚀 Cómo ejecutar el proyecto

1. Clona este repositorio
2. Abre el archivo .ipynb en Google Colab o Jupyter Notebook.
3. Asegúrate de tener instaladas las dependencias
4. Ejecuta las celdas en orden para reproducir el análisis y los gráficos

---

✍️ **Autor:** *Leydi Chavez*
