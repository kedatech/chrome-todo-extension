import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik';
import { object, string, date } from 'yup';
import css from './styles/Form.module.scss'
import { listStore } from '../../../shared/utils/listStore'

const taskSchema = object({
  title: string().required('Falta el titulo 😪'),
  description: string().required('También este, llenalo!!'),
  timeEnd: date().required('Falta la fecha 🥺')
});

export function Form() {
  const { setElements, elements } = listStore()
  const navigate = useNavigate()

  const formik = useFormik({
    initialValues: {
      title: '',
      description: '',
      timeEnd: ''
    },
    validationSchema: taskSchema,
    onSubmit: (values, { resetForm }) => {
      const ids = elements.map((el) => Number(el.id));
      const max = ids.length > 0 ? Math.max(...ids) : 0;
      setElements([
        ...elements,
        {
          id: max + 1,
          title: values.title,
          description: values.description,
          timeEnd: new Date(values.timeEnd),
          lapsed: false
        }
      ]);
      resetForm();
      navigate("/list")
    }
    
  });

  const {
    handleSubmit,
    handleChange,
    values,
    errors,
    touched,
  } = formik;

  return (
    <form className={css.formTask} onSubmit={handleSubmit}>
      <div className={css.containerInput}>
        <label htmlFor="title">Título:</label>
        {errors.title && touched.title && <div className={css.e}>{errors.title}</div>}
        <input
          type="text"
          id="title"
          name="title"
          value={values.title}
          onChange={handleChange}
        />
      </div>
      <div className={css.containerInput}>
        <label htmlFor="description">Descripción:</label>
        {errors.description && touched.description && <div className={css.e}>{errors.description}</div>}
        <input
          type='text'
          id="description"
          name="description"
          value={values.description}
          onChange={handleChange}
        />
      </div>
      <div className={css.containerInput}>
        <label htmlFor="timeEnd">Finalización:</label>
        {errors.timeEnd && touched.timeEnd && <div className={css.e}>{errors.timeEnd}</div>}
        <input
          type="datetime-local"
          id="timeEnd"
          name="timeEnd"
          value={values.timeEnd}
          onChange={handleChange}
        />
      </div>
      <button type="submit" >
        Agregar
      </button>
    </form>
  );
}
