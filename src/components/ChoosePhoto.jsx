/* import {View, Text} from 'react-native';
import React, {useCallback} from 'react';
import {Modal} from 'react-native';
import {StatusBar} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';

const [image, setImage] = useState();
const [preview, setPreview] = useState();
const accessToken = useSelector(state => state.user.accessToken);
const onResponse = useCallback(async response => {
  console.log(response.width, response.height, response.exif);
  setPreview({uri: `data:${response.mime};base64,${response.data}`});
  const orientation = response.exif?.Orientation;
  console.log('orientation', orientation);
  return ImageResizer.createResizedImage(
    response.path,
    600,
    600,
    response.mime.includes('jpeg') ? 'JPEG' : 'PNG',
    100,
    0,
  ).then(r => {
    console.log(r.uri, r.name);

    setImage({
      uri: r.uri,
      name: r.name,
      type: response.mime,
    });
  });
}, []);

const onTakePhoto = useCallback(() => {
  return ImagePicker.openCamera({
    includeBase64: true,
    includeExif: true,
    saveToPhotos: true,
  })
    .then(onResponse)
    .catch(console.log);
}, [onResponse]);

const onChangeFile = useCallback(() => {
  return ImagePicker.openPicker({
    includeExif: true,
    includeBase64: true,
    mediaType: 'photo',
  })
    .then(onResponse)
    .catch(console.log);
}, [onResponse]);

const ChoosePhoto = () => {
  return (
    <View>
      <ImagePicker />
    </View>
  );
};

export default ChoosePhoto;
 */
