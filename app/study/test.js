import * as Permissions from "expo-permissions";

//  const result = await Permissions.askAsync(Permissions.CAMERA_ROLL, Permissions.LOCATION)
const requestPermission = async () => {
  const { granted } = await ImagePicker.requestCameraRollPermissionsAsync();
  if (granted) alert("You need to enble permission to access the library");
};
useEffect(() => {
  requestPermission();
}, []);
