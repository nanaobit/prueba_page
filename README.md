repositorio hecho por y para hacer practicas de lo que es una pagina web
void __fastcall TForm1::sbarChange(TObject *Sender)
{
	sgrid->ColCount = sbar->Position;
}
//---------------------------------------------------------------------------
int sumElements(TStringGrid *v,int n){
	if (n==0) {
	  return 0;
	}else
	  return StrToInt(v->Cells[n-1][0])+sumElements(v,n-1);
}
int getElementMyr(TStringGrid *v,int n){
	if (n==0) {
	  return 0;
	}else
	if(n==1) {
	  return StrToInt(v->Cells[0][0]);
	}else{
	  int d=getElementMyr(v,n-1);
	  if (StrToInt(v->Cells[n-1][0])>d) {
		  return StrToInt(v->Cells[n-1][0]);
	  }else return d;
	}
}
int getElementMnr(TStringGrid *v,int n){
	 if (n==0)
	   return 0;
	 else
	 if (n==1)
	   return StrToInt(v->Cells[0][0]);
	 else{
	   int d=getElementMnr(v,n-1);
	   if (StrToInt(v->Cells[n-1][0])<d)
		  return StrToInt(v->Cells[n-1][0]);
	   else return d;
	 }
}
int sumElementsPar(TStringGrid *v,int n){
	 if (n>0) {
	   if ((n==1)&&(StrToInt(v->Cells[0][0])%2)==0) {
		  return StrToInt(v->Cells[0][0]);
	   }else{
		  if () {
		  
		  }
	   }
	 }return 0;
}
