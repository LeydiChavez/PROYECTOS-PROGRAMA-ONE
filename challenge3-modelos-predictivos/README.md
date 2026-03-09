# 📡 Telecom X – Predicción de Cancelación de Clientes (Churn)

## 📌 Descripción del Proyecto

Este proyecto tiene como objetivo analizar y predecir la cancelación de clientes (churn) en la empresa Telecom X utilizando técnicas de Análisis Exploratorio de Datos (EDA) y Machine Learning.

A partir del análisis de diferentes características de los clientes, se desarrollaron modelos predictivos capaces de estimar la probabilidad de cancelación del servicio. Esto permite identificar clientes con alto riesgo de abandono y proponer estrategias de retención basadas en datos.

---

🎯 Objetivos

- Analizar el comportamiento de los clientes y los factores asociados al churn.

- Identificar variables relevantes que influyen en la cancelación del servicio.

- Construir modelos de Machine Learning para predecir churn.

- Evaluar el rendimiento de distintos algoritmos de clasificación.

- Generar recomendaciones estratégicas para reducir la evasión de clientes.

---

## 🤖 Modelos de Machine Learning

Para predecir la cancelación de clientes se entrenaron varios modelos de clasificación:

- Logistic Regression

- K-Nearest Neighbors

- Random Forest

- XGBoost

Se aplicaron técnicas de preprocesamiento de datos, incluyendo normalización con:

- StandardScaler

y balanceo de clases utilizando:

- SMOTE

El rendimiento de los modelos fue evaluado mediante:

- Matrices de confusión

- Accuracy

- Precision

- Recall

- Importancia de variables (Permutation Importance)

---

## 📊 Principales factores que influyen en el Churn

A partir del análisis de correlaciones y la importancia de variables en los modelos, se identificaron los factores más influyentes en la cancelación de clientes:

- Tenure (antigüedad del cliente)

- Charges Monthly (cargo mensual)

- Tipo de contrato

- Tipo de servicio de internet

- Número de servicios contratados

Los resultados muestran que los clientes con menor antigüedad y contratos mensuales presentan mayor probabilidad de cancelación.

---


## 🧪 Prueba de Modelos con Nuevos Clientes

Para validar el funcionamiento de los modelos entrenados, se generaron perfiles de clientes ficticios y se evaluó su probabilidad de churn utilizando los modelos de:

- Logistic Regression

- Random Forest

Esto permite simular cómo los modelos pueden ser utilizados en un entorno real para identificar clientes con alto riesgo de cancelación.


---


## 💡 Estrategias de Retención Propuestas

Basado en los resultados obtenidos, se proponen las siguientes estrategias para reducir el churn:

1️⃣ Fidelización temprana

Implementar programas de retención durante los primeros meses del cliente, ya que el churn se concentra en clientes con baja antigüedad.

2️⃣ Incentivar contratos de largo plazo

Ofrecer descuentos o beneficios adicionales para clientes que opten por contratos anuales o de dos años.

3️⃣ Mejorar la percepción de valor del servicio

Evaluar los planes con cargos mensuales elevados y ofrecer paquetes de servicios que aumenten el valor percibido.

4️⃣ Promover servicios adicionales

Los clientes con mayor número de servicios contratados presentan menor probabilidad de cancelación.

---

## 📂 Estructura del Proyecto

```plaintext
challenge3-modelos-predictivos/
    ├── data/
    │   └── telecom_churn_limpio.csv
    ├── notebook/
    │   └── Challenge_3_TelecomX.ipynb
    ├── models/
    │   ├── modelo_logistic_regression.pkl
    │   ├── modelo_random_forest.pkl
    │   └── scaler.pkl
    └── README.md 

```

---

## 🛠️ Tecnologías Utilizadas

- Python 🐍

- Pandas 📊

- NumPy

- Matplotlib 📈

- Seaborn 📊

- Scikit-learn 🤖

- Google Colab ☁️

---

## ▶️ Cómo Ejecutar el Proyecto

1. Abrir el archivo .ipynb en Google Colab o Jupyter Notebook

2. Cargar el dataset utilizado en el análisis

3. Ejecutar las celdas en orden

4. Revisar las visualizaciones, modelos entrenados y conclusiones finales

---

## 📈 Resultados del Proyecto

Los modelos desarrollados demostraron ser capaces de identificar clientes con riesgo de churn, permitiendo a la empresa anticiparse a posibles cancelaciones.

Entre los modelos evaluados, Logistic Regression y Random Forest mostraron el mejor equilibrio entre precisión y capacidad de detección de churn.

Estos modelos pueden utilizarse como base para desarrollar sistemas de alerta temprana que ayuden a mejorar la retención de clientes.

---

✍️ **Autor:** *Leydi Chavez*
Para consultas o colaboración, puedes contactarme a través de LinkedIn o GitHub
