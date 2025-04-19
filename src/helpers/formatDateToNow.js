import { formatDistanceToNow, format } from 'date-fns';

export const formatDateToNow = postedAt => {
  return formatDistanceToNow(new Date(postedAt), { addSuffix: true });
};
export const formatData = date => {
  return format(new Date(date), 'Pp');
};
