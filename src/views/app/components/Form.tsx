import { useState } from 'react';
import { useFormik } from 'formik';
import { object, string, date } from 'yup';

const taskSchema = object({
  title: string().required('El título es requerido'),
  description: string().required('La descripción es requerida'),
  timeEnd: date().default(() => new Date())
});

export function Form() {
  const [submitting, setSubmitting] = useState(false);

  const formik = useFormik({
    initialValues: {
      title: '',
      description: '',
      timeEnd: ''
    },
    validationSchema: taskSchema,
    onSubmit: (values) => {
      setSubmitting(true);
      // TODO: GUARDAR
      console.log(values);
      setSubmitting(false);
    }
  });

  const {
    handleSubmit,
    handleChange,
    values,
    errors,
    touched,
    isSubmitting
  } = formik;

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Título:</label>
        {errors.title && touched.title && <div>{errors.title}</div>}
        <input
          type="text"
          id="title"
          name="title"
          value={values.title}
          onChange={handleChange}
        />
      </div>
      <div>
      {errors.description && touched.description && <div>{errors.description}</div>}
        <label htmlFor="description">Descripción:</label>
        <textarea
          id="description"
          name="description"
          value={values.description}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="timeEnd">Fecha de finalización:</label>
        <input
          type="datetime-local"
          id="timeEnd"
          name="timeEnd"
          value={values.timeEnd}
          onChange={handleChange}
        />
        {errors.timeEnd && touched.timeEnd && <div>{errors.timeEnd}</div>}
      </div>
      <button type="submit" disabled={isSubmitting || submitting}>
        Enviar
      </button>
    </form>
  );
}
