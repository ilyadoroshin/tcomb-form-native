var React = require('react');
var { TouchableOpacity, View, Text, TextInput } = require('react-native');

function textbox(locals) {
  if (locals.hidden) {
    return null;
  }


  var stylesheet = locals.stylesheet;
  let action;
  var formGroupStyle = stylesheet.formGroup.normal;
  var controlLabelStyle = stylesheet.controlLabel.normal;
  var textboxStyle = stylesheet.textbox.normal;
  var textboxViewStyle = stylesheet.textboxView.normal;
  var helpBlockStyle = stylesheet.helpBlock.normal;
  var errorBlockStyle = stylesheet.errorBlock;

  if (locals.config) {
    action = locals.config.onPress;
  }

  if (locals.editable === false) {
    textboxStyle = { ...textboxStyle, ...stylesheet.textbox.notEditable };
    textboxViewStyle = { ...textboxViewStyle, ...stylesheet.textboxView.notEditable };
  }

  if (locals.hasError) {
    formGroupStyle = stylesheet.formGroup.error;
    controlLabelStyle = stylesheet.controlLabel.error;
    textboxBg = textboxStyle.backgroundColor;
    textboxStyle = { ...textboxStyle, ...stylesheet.textbox.error, backgroundColor: textboxBg };
    textboxViewStyle = { ...textboxViewStyle, ...{ borderColor: stylesheet.textboxView.error.borderColor } };
    helpBlockStyle = stylesheet.helpBlock.error;
  }

  var label = locals.label ? <Text style={controlLabelStyle}>{locals.label}</Text> : null;
  var help = locals.help ? <Text style={helpBlockStyle}>{locals.help}</Text> : null;
  var error = locals.hasError && locals.error ? <Text accessibilityLiveRegion="polite" style={errorBlockStyle}>{locals.error}</Text> : null;

  const component = <TextInput
                      accessibilityLabel={locals.label}
                      ref="input"
                      autoCapitalize={locals.autoCapitalize}
                      autoCorrect={locals.autoCorrect}
                      autoFocus={locals.autoFocus}
                      blurOnSubmit={locals.blurOnSubmit}
                      editable={locals.editable}
                      keyboardType={locals.keyboardType}
                      maxLength={locals.maxLength}
                      multiline={locals.multiline}
                      onBlur={locals.onBlur}
                      onEndEditing={locals.onEndEditing}
                      onFocus={locals.onFocus}
                      onLayout={locals.onLayout}
                      onSelectionChange={locals.onSelectionChange}
                      onSubmitEditing={locals.onSubmitEditing}
                      placeholderTextColor={locals.placeholderTextColor}
                      secureTextEntry={locals.secureTextEntry}
                      selectTextOnFocus={locals.selectTextOnFocus}
                      selectionColor={locals.selectionColor}
                      numberOfLines={locals.numberOfLines}
                      underlineColorAndroid={locals.underlineColorAndroid}
                      clearButtonMode={locals.clearButtonMode}
                      clearTextOnFocus={locals.clearTextOnFocus}
                      enablesReturnKeyAutomatically={locals.enablesReturnKeyAutomatically}
                      keyboardAppearance={locals.keyboardAppearance}
                      onKeyPress={locals.onKeyPress}
                      returnKeyType={locals.returnKeyType}
                      selectionState={locals.selectionState}
                      onChangeText={(value) => locals.onChange(value)}
                      onChange={locals.onChangeNative}
                      placeholder={locals.placeholder}
                      style={textboxStyle}
                      value={locals.value} />

  return (
    <View style={formGroupStyle}>
      {label}
      {
        action
        ? <TouchableOpacity onPress={ ()=> action() }>{ component }</TouchableOpacity>
        : <View style={textboxViewStyle}>{ component }</View>
      }
      {help}
      {error}
    </View>
  );
}

module.exports = textbox;
